import AboutHeadBlock from '../../../components/about/AboutHeadBlock';
import HomeWorks from '../../../components/home/HomeWorks';
import AboutWorthsBlock from '../../../components/about/AboutWorthsBlock';
import AboutWorks from '../../../components/about/AboutWorks';
import AboutStages from '../../../components/about/AboutStages';
import AboutSecStages from '../../../components/about/AboutSecStages';
import AboutPartners from '../../../components/about/AboutPartners';
import AboutConsultBlock from '../../../components/about/AboutConsultBlock';
import PageSeoBlock from '../../../components/global/seoBlock/PageSeoBlock';
import AboutTechBlock from '../../../components/about/AboutTechBlock';
import MobileBack from '../../../components/global/MobileBack';

export const generateMetadata = async () => {
  return (
    {
      title: 'Информация о digital агентстве ITWEBS в Беларуси',
      description: 'ITWEBS — команда профессионалов в сфере информационных технологий, готовая предложить широкий спектр услуг для бизнеса',
      authors: [{ name: 'ITWEBS' }],
      openGraph: {
        title: 'Информация о digital агентстве ITWEBS в Беларуси',
        description: 'ITWEBS — команда профессионалов в сфере информационных технологий, готовая предложить широкий спектр услуг для бизнеса',
        url: `https://itwebs.by/about`,
        siteName: "Информация о digital агентстве ITWEBS в Беларуси",
        locale: "ru_RU",
        type: "article",
        publishedTime: "2020-10-11T00:00:00.000Z",
        authors: ['ITWEBS'],
        images: [
          {
            url: `https://imgur.com/c1221968-2875-426c-b27c-33dd23252f9d`,
            width: 1200,
            height: 630,
            alt: 'Информация о digital агентстве ITWEBS в Беларуси',
          },
        ],
      },
    }
  )
}

const AboutPage = () => {
  return (
    <>
      <AboutHeadBlock />
      <AboutWorthsBlock />
      <AboutWorks />
      <AboutSecStages />
      <AboutPartners />
      <AboutTechBlock />
      <AboutConsultBlock />
      <PageSeoBlock page={'about'} />
    </>
  )
}

export default AboutPage;