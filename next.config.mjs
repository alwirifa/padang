/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://giraffe-adjusted-severely.ngrok-free.app/api/:path*', // Proxy to Backend
        },
      ];
    },
  };
  
  export default nextConfig;
  