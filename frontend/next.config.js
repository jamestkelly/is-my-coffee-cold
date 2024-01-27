/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    COFFEE_CUP_MESH: process.env.NEXT_PUBLIC_COFFEE_CUP_MODEL_MESH_PATH,
  }
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

module.exports = withNextIntl(nextConfig);
