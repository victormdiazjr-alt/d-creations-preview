# D Creations — Project Operating System

## Mission

Build D Creations into a polished, conversion-focused Shopify storefront for Puerto Rico while preserving the strongest visual identity recovered from the July 29 preview.

## Source of truth

- The recovered visual baseline is commit `5dd41ac9fff365fb254a759e0795204228e8277d` from `victormdiazjr-alt/d-creations-preview`.
- The private `victormdiazjr-alt/D-Creations-Shopify` repository is an older Shopify Horizon theme reference from July 13, not the latest visual baseline.
- Read `docs/RECOVERY_STATE.md` before planning structural changes.
- Do not overwrite or reinterpret the recovered design without an explicit user decision.

## Working language and market

- Communicate with the owner primarily in Spanish, using clear Puerto Rico–appropriate language.
- Customer-facing copy should be natural, concise, confident, and free of generic AI phrasing.
- Preserve brand consistency across labels, stickers, NFC products, QR products, 3D prints, and 3D tags.

## Default workflow

1. Inspect the relevant page, assets, and current behavior.
2. State the intended outcome and the smallest safe change.
3. Make focused edits; do not refactor unrelated files.
4. Validate links, responsive behavior, accessibility basics, and visual consistency.
5. Summarize what changed, what was verified, and any remaining Shopify integration gap.

## Multi-agent policy

- Use one main agent by default.
- Spawn subagents only for independent work that can run in parallel or for a milestone audit.
- Keep write ownership singular: only one implementation agent edits a given area at a time.
- Prefer read-only subagents for exploration, content review, SEO, accessibility, and QA.
- Return concise findings to the control-center chat; do not flood it with logs.
- Use the efficiency auditor before expensive multi-agent runs or broad rewrites.

## Agent routing

- `storefront_builder`: implementation, responsive behavior, and Shopify adaptation.
- `content_seo`: product copy, navigation language, metadata, and content architecture.
- `visual_director`: image briefs, art direction, brand consistency, and asset selection.
- `quality_auditor`: read-only functional, accessibility, conversion, and regression review.
- `efficiency_auditor`: read-only scope reduction, context hygiene, and token-conscious orchestration.

## Quality gates

- No broken internal links or missing assets.
- Mobile and desktop layouts must both be inspected for material changes.
- Do not publish, push, deploy, or modify Shopify production without explicit approval.
- Treat the current static repository as a recovered build artifact until editable source is reconstructed.
- Keep generated imagery original and commercially appropriate.

## Git discipline

- Keep commits focused and descriptive.
- Preserve unrelated user changes.
- Never force-push or rewrite shared history without explicit approval.
- Before a commit, report the files changed and the validation performed.

## Control-center reporting

Every specialist chat should report back in this compact format:

- Outcome
- Evidence or files reviewed
- Changes made
- Validation
- Decisions needed from the owner
