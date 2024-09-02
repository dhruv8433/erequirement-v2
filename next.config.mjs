import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    if (dev) {
      // Enable source maps in development mode
      config.devtool = 'source-map';
    }
    return config;
  },
};

// Apply the Next Intl plugin
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
