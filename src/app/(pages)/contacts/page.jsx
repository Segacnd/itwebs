
import ContactPageHeading from "@/components/contacts/ContactPageHeading"
import PageHeading from "@/components/global/PageHeading"
import PageSeoBlock from "@/components/global/seoBlock/PageSeoBlock"
import HomeConsultBlock from "@/components/home/HomeConsultBlock"

export const generateMetadata = async () => {
  return (
    {
      title: 'Контактные данные агентства интернет маркетинга и разработки',
      description: 'Digital агетство ITWEBS | Разработка сайтов под ключ / маркетинговые услуги / SEO продвижение / Веб-дизайн и многое другое...',
      authors: [{ name: 'ITWEBS' }],
      openGraph: {
        title: 'Контактные данные агентства интернет маркетинга и разработки',
        description: 'Digital агетство ITWEBS | Разработка сайтов под ключ / маркетинговые услуги / SEO продвижение / Веб-дизайн и многое другое...',
        url: `https://itwebs.by/contacts`,
        siteName: "ITWEBS - digital агентство в Беларуси",
        locale: "ru_RU",
        type: "article",
        publishedTime: "2020-10-11T00:00:00.000Z",
        authors: ['ITWEBS'],
        images: [
          {
            url: `https://imgur.com/c1221968-2875-426c-b27c-33dd23252f9d`,
            width: 1200,
            height: 630,
            alt: 'Контактные данные агентства интернет маркетинга и разработки',
          },
        ],
      },
    }
  )
}

const ContactPage = () => {
    return(
        <>
          <ContactPageHeading />
          <HomeConsultBlock />
          <PageSeoBlock page={'contacts'} />
        </>
    )
}

export default ContactPage;