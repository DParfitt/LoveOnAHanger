const withTM = require('next-transpile-modules')(['@blockle/blocks-v2']);
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin({
  externals: ['@blockle/blocks-v2'],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, { dev, isServer }) {
    // Replace React with Preact only in client production build
    // if (!dev && !isServer) {
    //   Object.assign(config.resolve.alias, {
    //     react: "preact/compat",
    //     "react-dom": "preact/compat",
    //   });
    // }

    return config;
  },
};

module.exports = withVanillaExtract(withTM(nextConfig));
