# Is my coffee cold?

How long until this cup is too cold **for me**? Open the page, enter the coffee temperature, the surrounding air temperature and your preferred cutoff. Get an estimate without creating an account or sharing your location.

**Run locally:** With Node 24 and pnpm, run `pnpm install --frozen-lockfile` and `pnpm dev`. `pnpm build` generates the static site in `out/`. The [previous implementation](https://github.com/jamestkelly/is-my-coffee-cold/tree/de903338) is preserved in Git history.

## The first visit

The header language picker switches between English, French, Spanish, Simplified Chinese, Japanese, Korean and Vietnamese without resetting the entered cup. `/` opens in English; `/en/`, `/fr/`, `/es/`, `/zh-Hans/`, `/ja/`, `/ko/` and `/vi/` can be opened directly. The unit is Celsius in every language.

The landing page **is** the calculator. Start with three labeled, editable Celsius fields and an estimate in plain language. For example: “About 30 minutes until your coffee reaches 24 °C.” Explain that this assumes a constant room temperature and a typical cooling rate; a lid or an insulated mug can change the time substantially.

Manual entry is the default. Someone in a kitchen knows more about their room than a weather station does. For someone drinking outside, offer **Use outdoor temperature** next to the ambient field. Ask for location only after they choose it, explain that approximate coordinates go to Open-Meteo, and let them edit the result. Denying permission, losing the connection or hitting a provider limit must leave the manual calculator usable.

## Build decisions

| Decision | Reason |
| --- | --- |
| One [Next.js App Router static export](https://nextjs.org/docs/app/guides/static-exports) at the repository root, using TypeScript and React | Start with Next.js 16.4.6 and matching React/React DOM 19.3.1. Build the landing page ahead of time; a Client Component handles the calculator and optional weather lookup in the browser. No API route or running application server is needed. |
| [Vercel Labs UI SDK](https://ui-sdk.dev/) for the temperature inputs | Use its React Number Input for keyboard and pointer interaction. Keep labels, units, validation and result announcements accessible. Keep the formula independent of React. |
| [Open-Meteo current weather](https://open-meteo.com/en/docs) | Its open-access endpoint needs no key. On request, round the coordinates and fetch `current=temperature_2m` from `/v1/forecast` in Celsius. Show attribution next to the value and do not persist coordinates. The [free terms](https://open-meteo.com/en/terms) are for non-commercial use, with rate limits including 10,000 calls/day. Fetch once per request, never on each calculation. |
| [Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs) hosting | Use the Next.js preset at the repo root. Set `output: 'export'` in `next.config.ts`; `pnpm build` runs `next build` and produces `out/`. Review PR previews before deploying `main` to production. [Hobby](https://vercel.com/docs/plans/hobby) fits a personal, non-commercial launch. Revisit both hosting and weather terms before adding ads or charging users. |
| Defer Firebase Authentication | An estimate does not belong to an account. Even a remembered cutoff can stay on the device. Revisit Firebase if users need something private **across devices**, such as saved mug profiles. Don’t silently create anonymous Firebase users for public visitors. |

**What about Firebase’s MAU tier?** The often-quoted 50,000 monthly active users is the no-cost tier for most providers on **Blaze with Identity Platform**. On **Spark with Identity Platform**, most providers are limited to 3,000 **daily** active users. Base Firebase Auth has different terms, and phone/SMS and enterprise providers have separate pricing or limits. Choose a provider and verify the [Firebase Auth limits](https://firebase.google.com/docs/auth#identity-platform) when there is a feature worth signing in for. Hosting on Vercel does not require choosing an auth provider now.

## Calculation contract

Use Newton’s law of cooling with the legacy assumption `k = 0.1 per minute`. For a cup starting above the cutoff in air colder than the cutoff:

```text
minutes = ln((start − ambient) / (cutoff − ambient)) / k
```

Reject missing or non-finite inputs; 0 °C is valid. If `start ≤ cutoff`, report “already too cold.” Otherwise, if `ambient ≥ cutoff`, report “won’t reach the cutoff here.” These checks come before the logarithm. The reference cup (80 °C coffee, 21 °C air, 24 °C cutoff) reaches the cutoff in about 1,787 seconds. Round for display only.

## Review and releases

Use a Conventional Commit PR title (for example, `feat: Add the manual calculator`). The **Review Gate** combines the branch-name, PR-title and release-tooling checks. In GitHub, require **Review Gate** on `main` and configure squash merges to use the PR title as the commit message.

After checks pass on `main`, semantic-release reads commits since the last release tag and publishes a GitHub tag and release notes when warranted. `fix:` and `chore:` produce a patch, `feat:` a minor, and a breaking change a major. Only the release job gets write access; it uses the built-in GitHub token. There is no npm publication or deployment in this workflow.

## Delivery order

1. **Manual calculator.** Scaffold the root app, add the pure function and test the reference cup, already-cold and unreachable cases, empty inputs and zero ambient. A visitor should get an answer using only a keyboard and without any third-party requests.
2. **Contributor setup.** Add a root `AGENTS.md` with verified dev, test and build commands, unit conventions, and directions to the [UI SDK agent skill](https://ui-sdk.dev/docs/agents) and package-local React docs. Extend the shared checks workflow with type checks, tests and the production build.
3. **Outdoor shortcut.** Add geolocation and the attributed weather lookup. Test success, denied permission, timeout and a rate-limited response. A failed lookup must not overwrite the user's input.
4. **Launch.** Connect the repository to Vercel. On a preview URL verify the first visit on a phone, keyboard entry, manual use without location, and the outdoor shortcut over HTTPS. Promote after those checks pass.

Before switching an existing domain or retiring any cloud resources, confirm whether the legacy API or Firebase project still serves people outside this repository.

## License

[GNU Affero General Public License v3](LICENSE).
