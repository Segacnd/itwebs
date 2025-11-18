'use server'

import * as globalStyles from '../../../styles/app.module.css';
import * as styles from './listBlock.module.css';
import * as motion from 'motion/react-client';
import ServiceCard from './ServiceCard';
import '../../../../envConfig';
import QuizContainer from '@/components/quiz/QuizContainer';
import QuizBanner from '@/components/quiz/QuizBanner';

const ServicesListBlock = async () => {
    const port = process.env.BACKPORT || 5000, host = process.env.BACKHOST || 'localhost';
    class Service {
        constructor(name, link, image) {
            this.name = name;
            this.link = link;
            this.image = image;
        }
    }
    const defaultServices = {
        corporate: new Service('Корпоративный сайт', 'corporate', '4eafa9064fb246f3ae18a38b809068a434cd027c'),
        ecommerce: new Service('Интернет-магазин', 'ecommerce', 'c42500bd8688b534aa11ec6d1a441d45bc6faecb'),
        seo: new Service('SEO-оптимизация', 'seo', '40910c790e06b06f9d1869107dc64e4893e81288'),
        design: new Service('Дизайн-проект', 'design', 'e6193970ec023f1e75f6834b29ff4b2cebf9a736'),
        landing: new Service('Одностраничный сайт', 'landing', 'c04a6f770398d5e9094b39a58315901b3d669ec8'),
        marketing: new Service('Интернет-маркетинг', 'smm', '62848e94bc0f26f5e657fb44b8fbbedafba493af'),
        fintech: new Service('Финансово-технические проекты', 'fintech', '83a06b586bd7637b0a54c3f26951a42d51eed6a1'),
        ones: new Service('Настройка 1С продуктов', '1c', 'fe03f1a859da8a06e5c4179be896231a2f40e8ee'),
        maintenance: new Service('IT-обслуживание бизнеса', 'complex', 'cd03faae4e96d6e96ebd87071b67a543f55a13b5'),
        upworks: new Service('Доработки по сайту', 'upworks', 'fbdf1480a288a491dfc4f98085d970da2266d61b'),
    }
    const lefts = ['-5vw', '0', '15vw', '3vw', '5vw', '3vw', '-5vw', '-20vw', '5vw', '-3vw', '-5vw'], tops = ['5vw', '0', '5vw', '0', '4vw', '4vw', '4vw', '5vw', '7vw', '10vw', '5vw'], scales = ['0.9', '1.1', '1.2', '0.9', '0.7', '1', '0.8', '1.2', '1', '1.1'];
    return (
        <>
            <div className={[globalStyles.block, styles.block].join(' ')} style={{maxHeight:'none'}}>
                <div className={styles.titleMotionContainer}>
                    <motion.div
                        className={styles.titleMotion}
                        transition={{ duration: 1 }}
                        initial={{ transform: 'translateY(-16svh)', opacity: 0 }}
                        whileInView={{ transform: 'translateY(0)', opacity: 1 }}
                        viewport={{ amount: 'some' }}
                    >
                        <div className={styles.title}>
                            Какие услуги <br /> мы предоставляем ?
                        </div>
                    </motion.div>
                </div>
                <div className={styles.list}>
                    {Object.keys(defaultServices).map((item, ind) => (
                        <ServiceCard style={{ left: lefts[ind], top: tops[ind], scale: scales[ind] }} key={defaultServices[item].name} title={defaultServices[item].name} image={`http://${host}:${port}/services/global/` + defaultServices[item].image + '.png'} link={'/services/' + defaultServices[item].link} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default ServicesListBlock;