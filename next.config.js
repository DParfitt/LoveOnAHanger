const withTM = require("next-transpile-modules")(["@blockle/blocks-v2"]);
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin({
  externals: ["@blockle/blocks-v2"],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withVanillaExtract(withTM(nextConfig));
