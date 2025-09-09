/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https', // Or 'http' if applicable
            hostname: "books.google.com.br", // Replace with the actual hostname of your image domain
          },
          // Add more objects for other allowed domains if needed
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
          },
        ],
      },
};

export default nextConfig;
