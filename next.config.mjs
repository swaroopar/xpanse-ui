/** @type {import('next').NextConfig} */
const nextConfig = {
    output: undefined, // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.
    publicRuntimeConfig: {
        authUrl: process.env.NEXT_PUBLIC_ZITADEL_AUTHORITY_URL,
        clientId: process.env.NEXT_PUBLIC_ZITADEL_CLIENT_ID,
        redirectUri: process.env.NEXT_PUBLIC_ZITADEL_REDIRECT_URI,
        scopes: process.env.NEXT_PUBLIC_ZITADEL_SCOPE,
        xpanseApiUrl: process.env.NEXT_PUBLIC_XPANSE_API_URL,
    },
    // async rewrites() {
    //     return [
    //         // Rewrite everything else to use `pages/index`
    //         {
    //             source: '/:path*',
    //             destination: '/',
    //         },
    //     ];
    // },
};

export default nextConfig;
