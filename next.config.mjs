/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "books.google.com.br",
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
            },
            {
                protocol: 'https',
                hostname: 's2-oglobo.glbimg.com',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn1.gstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.pensador.com',
            },
            {
                protocol: 'https',
                hostname: 'www.infoescola.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.britannica.com',
            }
        ],
    },
};

export default nextConfig;