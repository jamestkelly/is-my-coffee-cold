# Is my coffee cold?

**[Try the calculator →](https://is-my-coffee-cold.vercel.app)** Pour a coffee at 80 °C in a 21 °C room. If you find it too cold at 40 °C, you have about **11 minutes**. Happy to drink it at 24 °C? Make that **30 minutes**. Those last few degrees take surprisingly long.

Enter your coffee temperature, the air temperature and your personal cutoff. The answer updates as you type. No account, location permission or backend is needed. If you’re outside, **Use outdoor temperature** can fill in the air temperature for you. With your permission, the browser sends approximate coordinates to [Open-Meteo](https://open-meteo.com/); the reading remains editable. In a kitchen, use the room temperature instead.

Use °C or °F in any of the seven languages. Enter the **current** coffee temperature: the estimate starts from that reading, not from when you poured the drink. Copy or bookmark the address to keep the readings and unit, for example [80 °C down to 40 °C](https://is-my-coffee-cold.vercel.app/#cutoff=40). Switching languages preserves your cup.

## Why do the last few degrees take so long?

A cup that’s 60 degrees warmer than the room loses heat faster than one that’s only 6 degrees warmer. [Newton’s law of cooling](https://en.wikipedia.org/wiki/Newton%27s_law_of_cooling) models that intuition: the rate of cooling is proportional to the **difference** between the coffee temperature $T$ and the air temperature $T_a$.

$$
\frac{dT}{dt} = -k(T - T_a)
$$

If the room temperature and cooling rate $k$ stay constant, a cup starting at $T_0$ follows an exponential curve:

$$
T(t) = T_a + (T_0 - T_a)e^{-kt}
$$

The calculator asks the inverse question: **when does the curve cross my cutoff?** Set $T(t)$ to $T_c$ and solve for time:

$$
t = \frac{1}{k}\ln\left(\frac{T_0 - T_a}{T_c - T_a}\right)
$$

We use $k = 0.1$ per minute, the assumption from the original project. In the 80 °C example, the initial gap is 59 degrees; at the 24 °C cutoff it’s just 3. The result is $10\ln(59/3)$ minutes, or about **29 minutes 47 seconds**. Only the displayed estimate is rounded.

Two cases don’t need a logarithm. If the cup is already at or below your cutoff, it’s already too cold. If it’s warmer than your cutoff but the air is at or above that cutoff, it won’t get there in finite time under this model. Zero degrees Celsius is a valid input, not a missing reading.

**How accurate is it?** The math describes the model exactly; the rate isn’t calibrated to your mug. A lid, insulation, the volume of coffee and a breeze can all change how quickly heat escapes. Treat the result as an estimate, not a timer. A useful experiment is to record your starting temperatures, predict a cutoff time, and check it with a thermometer.

### How the original calculator solved it

The [old Go implementation](https://github.com/jamestkelly/is-my-coffee-cold/blob/de903338/api/pkg/services/calculation_service.go) used [Heun’s method](https://en.wikipedia.org/wiki/Heun%27s_method), also called the improved Euler method. It took the current cooling rate, predicted the temperature one short step ahead, then averaged the slopes at the start and predicted end to get a better estimate for that step. It built a table of times and temperatures and searched it for the cutoff.

That’s useful when you know how temperature changes but can’t solve the equation directly. With constant air temperature and a fixed $k$, we *can* solve it. Today [one TypeScript function](lib/cooling.ts) returns the crossing time without choosing a step size or sending the cup readings to a server. The [reference tests](test/cooling.test.ts) keep the original 1,787-second example as a check.

## Run it locally

From the repository root, with Node.js 24 and pnpm (the version is pinned in `package.json`):

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open <http://localhost:3000>. No environment variables or weather key are required. Run `pnpm typecheck`, `pnpm test` and `pnpm build` to check a change. The production build writes a static site to `out/`.

## How the app fits together

- **Interface:** Next.js App Router exports the localized pages ahead of time. React and [Vercel Labs UI SDK](https://ui-sdk.dev/) handle the temperature inputs and language picker in the browser. [The calculator component](app/calculator.tsx) connects the controls to the model and the optional weather lookup.
- **Translations:** Edit the JSON files in [messages/](messages/), using `en.json` for the required keys. Keep placeholders such as `{n}` and `{field}`, moving them to wherever the language reads naturally. `pnpm test` checks the catalogs.
- **Hosting and releases:** Vercel builds previews for pull requests and deploys `main` to production. Use a Conventional Commit PR title; GitHub’s **Review Gate** checks the branch, title and build. Semantic-release uses commits on `main` to create version tags and GitHub release notes. The public weather endpoint is subject to [Open-Meteo’s non-commercial terms](https://open-meteo.com/en/terms).

## License

[GNU Affero General Public License v3](LICENSE).
