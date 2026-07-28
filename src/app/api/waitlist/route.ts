import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const contentLength = Number(req.headers.get("content-length") ?? "0");
  if (contentLength > 2048) {
    return NextResponse.json(
      { error: "payload_too_large" },
      { status: 413, headers: { "Cache-Control": "no-store" } },
    );
  }

  let body: { email?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "invalid_json" },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  // Quiet honeypot for basic bot traffic. A bot receives a normal success
  // response without adding anything to the audience.
  if (body.website?.trim()) {
    return NextResponse.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "invalid_email" },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const resendAudience = process.env.RESEND_AUDIENCE_ID;

  if (resendKey && resendAudience) {
    const res = await fetch(
      `https://api.resend.com/audiences/${resendAudience}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      },
    );
    // Resend returns 422 when the contact already exists — treat as success.
    if (!res.ok && res.status !== 422) {
      console.error(`[waitlist] resend error ${res.status}`);
      return NextResponse.json(
        { error: "forward_failed" },
        { status: 502, headers: { "Cache-Control": "no-store" } },
      );
    }
    return NextResponse.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  // Generic fallback: forward to any HTTP endpoint that accepts {email, source}.
  const endpoint = process.env.WAITLIST_FORWARD_URL;
  const apiKey = process.env.WAITLIST_FORWARD_KEY;
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify({ email, source: "flowtr-landing" }),
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: "forward_failed" },
        { status: 502, headers: { "Cache-Control": "no-store" } },
      );
    }
    return NextResponse.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  // Never pretend the signup was stored and never place the email in logs.
  return NextResponse.json(
    { error: "waitlist_unavailable" },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  );
}
