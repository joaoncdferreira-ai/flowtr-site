import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
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
      const detail = await res.text().catch(() => "");
      console.error(`[waitlist] resend error ${res.status}: ${detail}`);
      return NextResponse.json({ error: "forward_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
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
      return NextResponse.json({ error: "forward_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  // No provider configured — log so the signup is captured in dev logs.
  console.log(`[waitlist] new signup: ${email}`);
  return NextResponse.json({ ok: true });
}
