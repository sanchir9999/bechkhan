/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "bechekhan.ru" }],
        destination: "https://bechekhan.mn/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;