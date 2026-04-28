# Flowtr Site — Design Notes

## Font stack

The landing site at flowtr.app uses **Russo One** (display/headlines) + **Chakra Petch** (body).
The Flutter app uses **SairaCondensed** exclusively.

This split is intentional:
- Marketing site fonts optimise for first-impression punch to cold visitors
- Product font optimises for in-context legibility during active use
- The two surfaces serve different jobs; they dress differently

Do NOT swap the landing to SairaCondensed without a documented conversion experiment showing it outperforms Russo One.

## Brand color

Coral `#FF5733` is the single accent. No secondary accent colors.

## Animation

CSS `@keyframes` + vanilla `IntersectionObserver` only. No framer-motion.
The IO script lives inline in `src/app/layout.tsx`. Do not replace it.
