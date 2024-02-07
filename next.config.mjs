/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
            // port: '',
            // pathname: '/wp-content/uploads/2023/07/1-36.jpg',
          },
        ],
      },
};

export default nextConfig;
