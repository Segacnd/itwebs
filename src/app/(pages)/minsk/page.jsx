"use server";
import MinskFirstBlock from "../../../components/cities/minsk/MinskFirstBlock";
import HomeAdvantagesBlock from "../../../components/home/advantage/HomeAdvantagesBlock";
import HomeTechBlock from "../../../components/home/HomeTechBlock";
import HomeConsultBlock from "../../../components/home/consult/HomeConsultBlock";
import QuizBanner from "@/components/quiz/QuizBanner";
import HomeSecServices from "@/components/home/HomeSecServices";
import HomeSecWorks from "@/components/home/HomeSecWorks";
import StagesModern from "@/components/global/StagesModern";

export const generateMetadata = async () => {
  return {
    title: "Разработка веб-приложений под ключ Минск и обл.",
    description:
      "Разработка сайтов веб-приложений различной сложности в Минске и области. Landing-page, корпоративный сайт, интернет-магазин, SEO-продвижение",
    authors: [{ name: "ITWEBS" }],
    openGraph: {
      title: "Разработка сайтов под ключ Минск и обл. | ITWEBS",
      description:
        "Разработка сайтов веб-приложений различной сложности в Минске и области. Landing-page, корпоративный сайт, интернет-магазин, SEO-продвижение",
      url: `https://itwebs.by/minsk`,
      siteName: "Разработка веб-приложений под ключ | ITWEBS",
      locale: "ru_RU",
      type: "article",
      publishedTime: "2020-10-11T00:00:00.000Z",
      authors: ["ITWEBS"],
      images: [
        {
          url: `https://imgur.com/c1221968-2875-426c-b27c-33dd23252f9d`,
          width: 1200,
          height: 630,
          alt: "Разработка сайтов под ключ Минск и обл.| ITWEBS",
        },
      ],
    },
  };
};

const GrodnoPage = async () => {
  return (
    <>
      <MinskFirstBlock />
      <HomeAdvantagesBlock />
      <QuizBanner />
      <HomeSecServices />
      <HomeSecWorks />
      <StagesModern />
      <HomeTechBlock />
      <HomeConsultBlock />
    </>
  );
};

export default GrodnoPage;
