// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      pathname: '**',
    },
    {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
  ],
},
};

export default nextConfig;
