'use server'

import PageHeading from "@/components/global/PageHeading";
import VacanciesAdvantages from "@/components/vacancies/VacanciesAdvantages";
import VacanciesForm from "@/components/vacancies/VacanciesForm";
import VacanciesHead from "@/components/vacancies/VacanciesHead";


export const generateMetadata = async () => {
  return (
    {
      title: 'Вакансии | ITWEBS - digital агентство на территории Беларуси',
      description: 'Присоединяйтесь к нашей IT-команде! Откройте для себя вакансии в разных сферах и станьте частью инновационных проектов',
      authors: [{ name: 'ITWEBS' }],
      openGraph: {
        title: 'Вакансии | ITWEBS - digital агентство на территории Беларуси',
        description: 'Присоединяйтесь к нашей IT-команде! Откройте для себя вакансии в разных сферах и станьте частью инновационных проектов',
        url: `https://itwebs.by/vacancies`,
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
            alt: 'Вакансии | ITWEBS - digital агентство в Беларуси',
          },
        ],
      },
    }
  )
}

const VacanciesPage = async () => {
    return(
        <>
          <VacanciesHead />
          <VacanciesAdvantages/>
          <VacanciesForm />
        </>
    )
}

export default VacanciesPage;