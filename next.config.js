const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  reactStrictMode: true,
  redirects: [
    {
      source: "/getting-started/get-access-keys",
      destination: "/rpc-keys/get-rpc-keys",
      permanent: true,
    },
  ],
});
