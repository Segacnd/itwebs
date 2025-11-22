"use server";

import PageSeoBlock from "@/components/global/seoBlock/PageSeoBlock";
import ServiceSeoBlock from "@/components/global/seoBlock/ServiceSeoBlock";
import HomeConsultBlock from "@/components/home/consult/HomeConsultBlock";
import HomeTechBlock from "@/components/home/HomeTechBlock";
import PromotionHeadBlock from "@/components/promotion/PromotionHeadBlock";
import PromotionMainWays from "@/components/promotion/PromotionMainWays";
import PromotionServicesBlock from "@/components/promotion/PromotionServicesBlock";
import QuizBanner from "@/components/quiz/QuizBanner";
import PortfolioButton from "@/components/services/own/PortfolioButton";
import ServicesStages from "@/components/services/own/ServivesStages";

export const generateMetadata = async () => {
  return {
    title: "Услуги по продвижению сайтов на территории Беларуси",
    description:
      "Хотите, чтобы ваш бизнес заметили? Мы здесь, чтобы помочь! Откройте для себя наши услуги по продвижению и узнайте, как мы можем сделать ваш бренд ярче, а продажи – выше",
    authors: [{ name: "ITWEBS" }],
    openGraph: {
      title: "Услуги по продвижению сайтов на территории Беларуси",
      description:
        "Хотите, чтобы ваш бизнес заметили? Мы здесь, чтобы помочь! Откройте для себя наши услуги по продвижению и узнайте, как мы можем сделать ваш бренд ярче, а продажи – выше",
      url: `https://itwebs.by/promotion`,
      siteName: "ITWEBS - digital агентство в Беларуси",
      locale: "ru_RU",
      type: "article",
      publishedTime: "2020-10-11T00:00:00.000Z",
      authors: ["ITWEBS"],
      images: [
        {
          url: `https://imgur.com/c1221968-2875-426c-b27c-33dd23252f9d`,
          width: 1200,
          height: 630,
          alt: "Услуги по продвижению на территории Беларуси",
        },
      ],
    },
  };
};

const PromotionPage = async () => {
  return (
    <>
      <PromotionHeadBlock />
      <PromotionServicesBlock />
      <QuizBanner group={"promotion"} />
      <PromotionMainWays />
      <HomeTechBlock />
      <ServicesStages />
      <PortfolioButton />
      <HomeConsultBlock />
      <PageSeoBlock page={"promotion"} />
    </>
  );
};

export default PromotionPage;
