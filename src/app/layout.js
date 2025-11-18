import { Bruno_Ace, Bruno_Ace_SC, Geist, Geist_Mono, Montserrat, Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from '../components/header/Header';
// import BackBlur from "@/components/BackBlur/BackBlur";
import dotenv from 'dotenv';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/footer/Footer";
import StoreProvider from "./StoreProvider";
import localFont from 'next/font/local';
import Head from "next/head";
import Background from "@/components/global/Background";
import CookieComponent from "@/components/global/CookieComponent";
import SecBackground from "@/components/global/SecBackground";
// import StoreProvider from "./StoreProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const gilroy = localFont({
  src: [
    {
      path: '../ui/Gilroy/Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../ui/Gilroy/Gilroy-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../ui/Gilroy/Gilroy-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../ui/Gilroy/Gilroy-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ]
})

const nunito = Nunito({
  weight: 'variable',
  variable: '--font-nunito',
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese']
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin', 'cyrillic', 'cyrillic-ext', 'latin-ext'],
  display: 'swap'
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ["cyrillic", "cyrillic-ext", "latin"]
})

const brunoAce = Bruno_Ace({
  variable: '--font-brunoace',
  subsets: ["latin", "latin-ext"],
  weight: '400'
})

export const metadata = {
  metadataBase: new URL("https://itwebs.by"),
  title: {
    default: "Разработка веб-приложений и сайтов под ключ в Беларуси | ITWEBS",
  },
  description: "Все, что вам нужно для развития вашего бизнеса! От создания сайта до привлечения клиентов в цифровой среде. Начните здесь и сейчас!",
  openGraph: {
    title: "Разработка веб-приложений и сайтов под ключ в Беларуси | ITWEBS",
    description: "Все, что вам нужно для развития вашего бизнеса! От создания сайта до привлечения клиентов в цифровой среде. Начните здесь и сейчас!",
    url: "https://itwebs.by/",
    siteName: "Разработка веб-приложений и сайтов под ключ в Беларуси | ITWEBS",
    images: 'https://i.imgur.com/Fzgsm72.jpeg',
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    yandexBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },
};

export const dynamic = 'force-dynamic'



export default function RootLayout({ children }) {
  dotenv.config();
  return (
    <StoreProvider>
      <html lang="ru">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <meta name="theme-color" content="#1A1A1A" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#007CF8" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1A1A1A" />
          <link rel="icon" href="./icon.svg" sizes="any" />
          <link
            rel="apple-touch-icon"
            href="./apple-icon.png"
            sizes="any"
            type="image/png"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />


          <script> </script>
        </Head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BLHKYLP38C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BLHKYLP38C');
          `}
        </Script>
        {/* GMT */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-52FZRFGX');
            `}
        </Script>
        {/* Яндекс.Метрика */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js','ym');

            ym(104940505, 'init', {
                ssr:true,
                webvisor:true,
                clickmap:true,
                ecommerce:"dataLayer",
                accurateTrackBounce:true,
                trackLinks:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/104940505"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>

        <body className={`${[nunitoSans.variable, brunoAce.variable, geistSans.variable, nunito.variable, gilroy.variable, geistMono.variable, montserrat.variable].join(' ')}`}>
          {/* GMT */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52FZRFGX"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          {/* <Background /> */}
          <SecBackground />
          <ToastContainer />
          <Header />
          <CookieComponent />
          {children}
        </body>
      </html>
    </StoreProvider>

  );
}
