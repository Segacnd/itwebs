'use server'

import HomeTechBlock from '@/components/home/HomeTechBlock';
import ServicesStages from '@/components/services/own/ServivesStages';
import PortfolioButton from '@/components/services/own/PortfolioButton';
import HomeConsultBlock from '@/components/home/HomeConsultBlock';
import QuizBanner from '@/components/quiz/QuizBanner';
import SMMHeadBlock from '@/components/smm/SMMHeadBlock';
import SocialMainWays from '@/components/smm/socialMainWays';
import SMMServicesBlock from '@/components/smm/SMMServicesBlock';
import DetailButtonsPair from '@/components/services/own/detailButtonsPair';
import ServiceSeoBlock from '@/components/global/seoBlock/ServiceSeoBlock';
import MarketingMainWays from '@/components/marketing/MarketingMainWays';


export const generateMetadata = async () => {
    return (
        {
            title: 'SMM | эффективное продвижение бизнеса в социальных сетях | ITWEBS',
            description: 'SMM продвижение - комплексный подход к развитию вашего бизнеса в социальных сетях. Мы предлагаем разработку стратегии, создание контента, таргетированную рекламу и аналитику результатов',
            authors: [{ name: 'ITWEBS' }],
            openGraph: {
                title: 'SMM | эффективное продвижение бизнеса в социальных сетях | ITWEBS',
                description: 'SMM продвижение - комплексный подход к развитию вашего бизнеса в социальных сетях. Мы предлагаем разработку стратегии, создание контента, таргетированную рекламу и аналитику результатов',
                url: `https://itwebs.by/marketing/smm`,
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
                        alt: 'Услуги по разработке веб приложение и интернет-маркетинг в Беларуси',
                    },
                ],
            },
        }
    )
}

const SocialMediaPage = async () => {
    return (
        <>
            <SMMHeadBlock />
            <DetailButtonsPair serviceLink={'smm'} />
            <SMMServicesBlock />
            <QuizBanner group={'smm'} />
            <MarketingMainWays />
            <HomeTechBlock />
            <ServicesStages />
            <PortfolioButton />
            <HomeConsultBlock />
            <ServiceSeoBlock link={'smm'} />
        </>
    )
}

export default SocialMediaPage;