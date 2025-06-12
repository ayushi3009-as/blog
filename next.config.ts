import type { NextConfig } from 'next';
import type { Configuration as WebpackConfig } from 'webpack';
import path from 'path';

const nextConfig: NextConfig = {
  webpack: (config: WebpackConfig) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        '@': path.resolve(__dirname, 'src'),
      },
    };
    return config;
  },
};

export default nextConfig;
