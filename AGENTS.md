From the repository root on Node 24: `pnpm install --frozen-lockfile`, then `pnpm dev`. Before opening a PR run `pnpm typecheck`, `pnpm test` and `pnpm build`; the static entry point is `out/index.html`.

For temperature or rounding changes, follow the Celsius/minutes contract and reference cup in README.md. For controls, consult `node_modules/@ui-sdk/react/docs/components/number-input.md` and the [UI SDK agent guide](https://ui-sdk.dev/docs/agents). Compare layouts with `docs/design/mobile-reference.png`.
