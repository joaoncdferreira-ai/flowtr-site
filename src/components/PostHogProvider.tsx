"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

let initialized = false;

/**
 * Initializes PostHog client-side once on mount. Mounted once at the root
 * layout. Pageviews are captured automatically by posthog-js (single-page
 * landing — no client-side route changes to instrument). Custom events
 * (e.g. waitlist_signup) are fired by importing `posthog` from the same
 * package elsewhere in the tree — this module owns init only.
 *
 * NEXT_PUBLIC_POSTHOG_KEY must be set at build time. If absent, init is
 * skipped silently so dev/preview builds work without analytics noise.
 */
export function PostHogInit() {
  useEffect(() => {
    if (initialized) return;
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;
    posthog.init(key, {
      api_host: "https://eu.i.posthog.com",
      person_profiles: "identified_only",
      capture_pageview: true,
      capture_pageleave: true,
    });
    initialized = true;
  }, []);

  return null;
}
