"use server";

import HomeTechBlock from "@/components/home/HomeTechBlock";
import ServicesStages from "@/components/services/own/ServivesStages";
import PortfolioButton from "@/components/services/own/PortfolioButton";
import HomeConsultBlock from "@/components/home/consult/HomeConsultBlock";
import MarketingHeadBlock from "@/components/marketing/MarketingHeadBlock";
import MarketingServicesBlock from "@/components/marketing/MarketingServicesBlock";
import QuizBanner from "@/components/quiz/QuizBanner";
import MarketingMainWays from "@/components/marketing/MarketingMainWays";
import ServiceSeoBlock from "@/components/global/seoBlock/ServiceSeoBlock";

export const generateMetadata = async () => {
  return {
    title: "Услуги интернет маркетинга на территории Беларуси",
    description:
      "Хотите, чтобы ваш бизнес заметили? Мы здесь, чтобы помочь! Откройте для себя наши услуги маркетинга и узнайте, как мы можем сделать ваш бренд ярче, а продажи – выше",
    authors: [{ name: "ITWEBS" }],
    openGraph: {
      title: "Услуги интернет маркетинга на территории Беларуси",
      description:
        "Хотите, чтобы ваш бизнес заметили? Мы здесь, чтобы помочь! Откройте для себя наши услуги маркетинга и узнайте, как мы можем сделать ваш бренд ярче, а продажи – выше",
      url: `https://itwebs.by/marketing`,
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
          alt: "Услуги интернет маркетинга на территории Беларуси",
        },
      ],
    },
  };
};

const MarketingPage = async () => {
  return (
    <>
      <MarketingHeadBlock />
      {/* <ServicesHeadBlock/> */}
      {/* <ServicesListBlock/> */}
      <MarketingServicesBlock />
      <QuizBanner group={"marketing"} />
      <MarketingMainWays />
      <HomeTechBlock />
      <ServicesStages />
      <PortfolioButton />
      <HomeConsultBlock />
      <ServiceSeoBlock link={"marketing"} />
    </>
  );
};

export default MarketingPage;
