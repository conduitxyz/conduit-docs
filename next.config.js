const { withPlausibleProxy } = require("next-plausible");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withPlausibleProxy()(withNextra({ reactStrictMode: true }));
