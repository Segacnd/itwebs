'use server'
import Image from "next/image";
import styles from "./page.module.css";
import HomeFirstBlock from "@/components/home/HomeFirstBlock";
// import ConsultButton from "@/components/buttons/ConsultButton";
import HomeAdvantagesBlock from "@/components/home/HomeAdvantagesBlock";
import HomeStages from "@/components/home/HomeStages";
import HomeServicesBlock from "@/components/home/HomeServicesBlock";
import HomeWorks from "@/components/home/HomeWorks";
import HomeTechBlock from "@/components/home/HomeTechBlock";
import HomeConsultBlock from "@/components/home/HomeConsultBlock";
import { useSelector } from "react-redux";
import HomeSecWorks from "../../components/home/HomeSecWorks";
import QuizContainer from "@/components/quiz/QuizContainer";
import QuizBanner from "@/components/quiz/QuizBanner";

import HomeSecServices from "@/components/home/HomeSecServices";
import PageSeoBlock from "@/components/global/seoBlock/PageSeoBlock";
import StagesModern from "@/components/global/stage-modern/StagesModern";
// import HomeTestBlock from "@/components/home/HomeTestBlock";


export const generateMetadata = async () => {
  return (
    {
      title: 'Разработка веб-приложений и сайтов под ключ в Беларуси | ITWEBS',
      description: 'Все, что вам нужно для развития вашего бизнеса! От создания сайта до привлечения клиентов в цифровой среде. Начните здесь и сейчас!',
      authors: [{ name: 'ITWEBS' }],
      openGraph: {
        title: 'Разработка веб-приложений и сайтов под ключ в Беларуси | ITWEBS',
        description: 'Все, что вам нужно для развития вашего бизнеса! От создания сайта до привлечения клиентов в цифровой среде. Начните здесь и сейчас!',
        url: `https://itwebs.by/`,
        siteName: "Разработка веб-приложений и сайтов под ключ в Беларуси | ITWEBS",
        locale: "ru_RU",
        type: "article",
        publishedTime: "2020-10-11T00:00:00.000Z",
        authors: ['ITWEBS'],
        images: [
          {
            url: `https://imgur.com/c1221968-2875-426c-b27c-33dd23252f9d`,
            width: 1200,
            height: 630,
            alt: 'Разработка веб-приложений и сайтов под ключ в Беларуси | ITWEBS',
          },
        ],
      },
    }
  )
}


export default async function Home() {
  
  return (
    <>
      <HomeFirstBlock />
      
      <HomeAdvantagesBlock />
      <QuizBanner group={'consult'} />
      
      {/* <HomeStages /> */}
      {/* <HomeServicesBlock /> */}
      <HomeSecServices />
      <HomeSecWorks />
      <StagesModern />
      {/* <HomeWorks /> */}
      <HomeTechBlock />
      <HomeConsultBlock />
      <PageSeoBlock page={'main'} />
    </>
  );
}
