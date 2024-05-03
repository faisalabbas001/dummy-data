/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async=>{
        return [
            {
                source:"/contact",
                destination:"/study",
                permanent:false
            },
            {
                source:"/admin",
                destination:"/",
                permanent:false
            },
            {
                source:"/shapes/:shapeid",
                destination:"/about",
                permanent:false
            }
        ]
    }
};

export default nextConfig;
