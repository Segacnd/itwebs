"use server";

import HomeTechBlock from "@/components/home/HomeTechBlock";
import ServicesHeadBlock from "../../../components/services/own/ServicesHeadBlock";
import ServicesListBlock from "../../../components/services/own/ServicesListBlock";
import ServicesStages from "@/components/services/own/ServivesStages";
import PortfolioButton from "@/components/services/own/PortfolioButton";
import HomeConsultBlock from "@/components/home/consult/HomeConsultBlock";
import PageSeoBlock from "@/components/global/seoBlock/PageSeoBlock";
import QuizContainer from "@/components/quiz/QuizContainer";
import DevelopmentHeadBlock from "@/components/development/DevelopmentHeadBlock";
import DevelopmensListBlock from "@/components/development/DevelopmentsListBlock";
import DevelopmentMainWaysBlock from "@/components/development/DevelopmentMainWaysBlock";
import QuizBanner from "@/components/quiz/QuizBanner";
import ServiceSeoBlock from "@/components/global/seoBlock/ServiceSeoBlock";

export const generateMetadata = async () => {
  return {
    title: "Услуги по разработке веб сайтов и приложений в Беларуси",
    description:
      "Закажите разработку сайтов: landing page, корпоративные сайты, интернет-магазины и веб-дизайн. Профессиональное обслуживание и 1С разработка.",
    authors: [{ name: "ITWEBS" }],
    openGraph: {
      title: "Услуги по разработке веб сайтов и приложений в Беларуси",
      description:
        "Закажите разработку сайтов: landing page, корпоративные сайты, интернет-магазины и веб-дизайн. Профессиональное обслуживание и 1С разработка.",
      url: `https://itwebs.by/developments`,
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
          alt: "Услуги по разработке веб сайтов и приложений в Беларуси",
        },
      ],
    },
  };
};

const DevelopmentPage = async () => {
  return (
    <>
      <DevelopmentHeadBlock />
      <DevelopmensListBlock />
      <QuizBanner group={"development"} />
      <DevelopmentMainWaysBlock />
      <HomeTechBlock />
      <ServicesStages />
      <PortfolioButton />
      <HomeConsultBlock />
      <PageSeoBlock page={"development"} />
    </>
  );
};

export default DevelopmentPage;
