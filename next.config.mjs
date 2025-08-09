/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*', // Moved from domains
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
