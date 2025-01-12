const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['cdn.sanity.io'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },

  };
  
  export default nextConfig; // Only the default export
  