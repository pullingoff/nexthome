/** @type {import('next').NextConfig} */

const path = require("path");
module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: process.env.NODE_ENV === "development",
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
    images: {
      deviceSizes: [335, 640, 758, 980, 1080, 1200, 1920, 2048],
    },
    i18n: {
      locales: ["kr"],
      defaultLocale: "kr",
    },
    // webpack5: true,
    webpack: (config, { isServer }) => {
      config.resolve.fallback = { fs: false };
      return config;
    },
    output: "standalone",
    transpilePackages: ["next-mdx-remote"],
  };
  return nextConfig;
};
