import { origin } from '../../lib/site';

export const metadata = {
  title: 'Privacy | Is my coffee cold?',
  description: 'What stays in your browser and what is sent when you request outdoor weather.',
  alternates: { canonical: `${origin}/privacy/` },
};

export default function Privacy() {
  return <main className="privacy">
    <a href="/">← Back to the calculator</a>
    <h1>Privacy</h1>
    <h2>Entering temperatures</h2>
    <p>Your browser calculates the cooling time. You don’t need an account, and the calculator doesn’t send your coffee temperature or cutoff to a calculation service. When you switch languages, edited temperatures can appear after the # in the URL to preserve your cup. That part is not sent in the web request, but someone you share the full link with can see it.</p>
    <h2>Using outdoor weather</h2>
    <p>Manual entry never asks for your location. If you select “Use outdoor temperature” and then “Use my location”, your browser checks location permission. It rounds latitude and longitude to one decimal place before requesting the current air temperature directly from Open-Meteo. The provider receives those approximate coordinates and your IP address. The app does not store your coordinates.</p>
    <p>You can decline permission and keep entering temperatures yourself. To change an earlier decision, use your browser’s site permissions. See <a href="https://open-meteo.com/en/terms">Open-Meteo’s terms and privacy notice</a> for how it handles requests.</p>
    <h2>Visiting the site</h2>
    <p>Vercel hosts the pages and receives ordinary web request information, such as your IP address and the requested path, to deliver them. See <a href="https://vercel.com/legal/privacy-policy">Vercel’s privacy policy</a>. For questions about the calculator, use its <a href="https://github.com/jamestkelly/is-my-coffee-cold/issues">public issue tracker</a>; please leave out your coordinates and other personal details.</p>
  </main>;
}
