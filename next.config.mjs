/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['cdn.sanity.io'], // Add the domain here
    },
};

export default nextConfig;
