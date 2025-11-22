"use server";

import HomeTechBlock from "@/components/home/HomeTechBlock";
import ServicesStages from "@/components/services/own/ServivesStages";
import PortfolioButton from "@/components/services/own/PortfolioButton";
import HomeConsultBlock from "@/components/home/consult/HomeConsultBlock";
import QuizBanner from "@/components/quiz/QuizBanner";
import SMMHeadBlock from "@/components/smm/SMMHeadBlock";
import SocialMainWays from "@/components/smm/socialMainWays";
import SMMServicesBlock from "@/components/smm/SMMServicesBlock";
import PerfomanceHeadBlock from "@/components/perfomance/PerfomanceHeadBlock";
import PerfomanceServicesBlock from "@/components/perfomance/PerfomanceServicesBlock";
import PerfomanceMainWays from "@/components/perfomance/PerfomanceMainWays";
import DetailButtonsPair from "@/components/services/own/detailButtonsPair";
import MarketingMainWays from "@/components/marketing/MarketingMainWays";

export const generateMetadata = async () => {
  return {
    title: "Привлечение трафика: больше посетителей, клиентов и продаж",
    description:
      "Мы специализируемся на привлечении именно той аудитории, которая с наибольшей вероятностью станет вашими покупателями. Используя проверенные стратегии и современные инструменты",
    authors: [{ name: "ITWEBS" }],
    openGraph: {
      title: "Привлечение трафика: больше посетителей, клиентов и продаж",
      description:
        "Мы специализируемся на привлечении именно той аудитории, которая с наибольшей вероятностью станет вашими покупателями. Используя проверенные стратегии и современные инструменты",
      url: `https://itwebs.by/marketing/perfomance`,
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
          alt: "Настройка контекстной рекламы на территории Беларуси: инвестируйте в рост вашего бизнеса",
        },
      ],
    },
  };
};

const PerfomancePage = async () => {
  return (
    <>
      <PerfomanceHeadBlock />
      <DetailButtonsPair serviceLink={"perfomance"} />
      <PerfomanceServicesBlock />
      <QuizBanner group={"perfomance"} />
      <MarketingMainWays />
      <HomeTechBlock />
      <ServicesStages />
      <PortfolioButton />
      <HomeConsultBlock />
    </>
  );
};

export default PerfomancePage;
