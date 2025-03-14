import { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    domains: ['kobiljon.com', 'bermet.kobiljon.com'],
  },
  basePath: isProd ? '/nfc' : '',
  assetPrefix: isProd ? '/nfc/' : '',
  trailingSlash: true, // Ensures that all routes and assets have a trailing slash for static deployment
};

export default nextConfig;