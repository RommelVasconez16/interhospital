/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "interhospital.com.ec"],
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
