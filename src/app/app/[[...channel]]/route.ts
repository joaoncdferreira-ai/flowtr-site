import {
  campaignChannel,
  campaignDestination,
  platformFromUserAgent,
} from "@/lib/campaign-links";

// flowtr.app/app and flowtr.app/app/<channel> (tiktok, instagram, clubes,
// empresas, imprensa, whatsapp): one link per channel, each visitor sent to
// their store with the channel attached. Also accepts /app?c=<channel>.
export async function GET(
  request: Request,
  { params }: { params: Promise<{ channel?: string[] }> },
) {
  const { channel: segments } = await params;
  const url = new URL(request.url);
  const channel = campaignChannel(segments?.[0] ?? url.searchParams.get("c"));
  const platform = platformFromUserAgent(request.headers.get("user-agent") ?? "");
  const destination = campaignDestination(
    channel,
    platform,
    process.env.APPLE_CAMPAIGN_PROVIDER_TOKEN,
  );
  // Visible in Vercel's request logs: clicks per channel and platform.
  console.log(JSON.stringify({ event: "campaign_click", channel, platform }));
  return new Response(null, {
    status: 302,
    headers: {
      Location: new URL(destination, url.origin).toString(),
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
