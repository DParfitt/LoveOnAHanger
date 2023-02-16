const externals = ['@blockle/blocks-v2', 'outdent'];

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin({
  externals,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: externals,
  // assetPrefix: './',
};

module.exports = withVanillaExtract(nextConfig);
