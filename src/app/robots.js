import { userAgent } from "next/server";

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disalow: '/admin',
        },
        sitemap: 'https://itwebs.by/sitemap.xml',
    }
}