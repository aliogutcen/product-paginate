/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack5: true,
    images: {
        domains: ['cdn.dummyjson.com'],
      },
    async headers() {
        return [
        {
            source: '/(.*)',
            headers: [
            {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
            },
            ],
        },
        ];
    },
};

export default nextConfig;
