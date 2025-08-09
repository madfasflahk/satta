/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['dmpsza32x691.cloudfront.net'],
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'sportzpoint-media.s3.ap-south-1.amazonaws.com',
              port: '',
              pathname: '/**',
          }
      ],
  },
};

export default nextConfig;
