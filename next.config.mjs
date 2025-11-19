/** @type {import('next').NextConfig} */
const nextConfig = {
    api: {
        bodyParser: {
            sizeLimit: "30mb",
        },
    },
    experimental: {
        serverActions: {
            bodySizeLimit: "30mb",
        },
    },
    images:{
        dangerouslyAllowSVG: true,
        remotePatterns:[
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '',
                search:''
            }, new URL(`${process.env.BACKSEC||'http'}://${process.env.BACKHOST||'localhost'}:${process.env.BACKPORT||'8000'}/**`)
        ]
    }
};

export default nextConfig;
