/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['avatar.vercel.sh'], // ✅ Add the allowed domain here
    },
};

export default nextConfig;
