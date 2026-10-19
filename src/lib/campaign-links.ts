import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/store-links";

// Campaign links: flowtr.app/app/<channel> sends each visitor to the right
// store, tagged so installs can be attributed per channel —
// App Store Connect › App Analytics › Campaigns (ct) and
// Google Play Console › Store listing acquisition › UTM (utm_source).

export const CAMPAIGN_CHANNELS = {
  tiktok: "social",
  instagram: "social",
  clubes: "partner",
  empresas: "partner",
  imprensa: "press",
  whatsapp: "messaging",
} as const;

export type CampaignChannel = keyof typeof CAMPAIGN_CHANNELS;

/** Unknown or missing channels count as the site itself. */
export function campaignChannel(raw: string | null | undefined): CampaignChannel | "site" {
  const key = (raw ?? "").trim().toLowerCase();
  return key in CAMPAIGN_CHANNELS ? (key as CampaignChannel) : "site";
}

export type Platform = "ios" | "android" | "other";

export function platformFromUserAgent(ua: string): Platform {
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "other";
}

const CAMPAIGN = "lancamento";
const APPLE_APP_ID = /id(\d+)/.exec(APP_STORE_URL)?.[1] ?? "6765536804";
const ANDROID_PACKAGE = new URL(GOOGLE_PLAY_URL).searchParams.get("id") ?? "com.flowtr.app";

/**
 * Apple only attributes a campaign link that carries the provider token (pt,
 * App Store Connect › App Analytics › Campaign link generator) next to ct.
 */
export function appStoreCampaignUrl(channel: CampaignChannel | "site", providerToken?: string): string {
  const url = new URL(`https://apps.apple.com/app/apple-store/id${APPLE_APP_ID}`);
  if (providerToken) url.searchParams.set("pt", providerToken);
  url.searchParams.set("ct", channel);
  url.searchParams.set("mt", "8");
  return url.toString();
}

export function playStoreCampaignUrl(channel: CampaignChannel | "site"): string {
  const medium = channel === "site" ? "web" : CAMPAIGN_CHANNELS[channel];
  const referrer = new URLSearchParams({
    utm_source: channel,
    utm_medium: medium,
    utm_campaign: CAMPAIGN,
  }).toString();
  const url = new URL("https://play.google.com/store/apps/details");
  url.searchParams.set("id", ANDROID_PACKAGE);
  url.searchParams.set("referrer", referrer);
  return url.toString();
}

/** Where a visitor from [channel] on [platform] goes. Desktop: the home page. */
export function campaignDestination(
  channel: CampaignChannel | "site",
  platform: Platform,
  providerToken?: string,
): string {
  if (platform === "ios") return appStoreCampaignUrl(channel, providerToken);
  if (platform === "android") return playStoreCampaignUrl(channel);
  return `/?utm_source=${channel}&utm_medium=${channel === "site" ? "web" : CAMPAIGN_CHANNELS[channel]}&utm_campaign=${CAMPAIGN}`;
}
