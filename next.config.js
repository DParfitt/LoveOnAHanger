const externals = ['@blockle/blocks-v2', 'outdent'];

const withTM = require('next-transpile-modules');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin({
  externals,
  withTM: withTM(externals),
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withVanillaExtract(withTM(externals)(nextConfig));
