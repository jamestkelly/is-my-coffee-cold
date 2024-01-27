import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./lib/navigation";

export default createMiddleware({
  locales: locales,
  defaultLocale: "en",
  localePrefix: localePrefix,
});

export const config = {
  // Skip all paths that should not be internationalised
  matcher: ["/", "/(en|fr|jp)/:path*"],
};
