From the repository root on Node 24: `pnpm install --frozen-lockfile`, then `pnpm dev`. Before opening a PR run `pnpm typecheck`, `pnpm test` and `pnpm build`; the static entry point is `out/index.html`.

For temperature or rounding changes, follow the Celsius/minutes contract and reference cup in README.md. For controls, consult `node_modules/@ui-sdk/react/docs/components/number-input.md` and the [UI SDK agent guide](https://ui-sdk.dev/docs/agents). Compare layouts with `docs/design/mobile-reference.png`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
