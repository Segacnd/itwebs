'use client'
import { use, useEffect, useRef, useState } from 'react';
import stylesMain from './homeAdvantages.module.css';
import * as motion from 'motion/react-client';

const HomeAdvantagesBlock = () => {
    let articleRef = useRef();
    let [advantage1, advantage2, advantage3, advantage4] = [useRef(), useRef(), useRef(), useRef()];
    const refs = [advantage1, advantage2, advantage3, advantage4];
    const [wind,setWind] = useState(null);
    class Advantage {
        constructor(main, sec) {
            this.main = main;
            this.sec = sec;
        }
    }
    const [advantages, setAdvantages] = useState([
        new Advantage('+5 лет', 'Системно помогаем бизнесам расти и развиваться.'), new Advantage('100%', 'гарантия на продукты компании'),
        new Advantage('30+', 'Уникальных проектов: от разработки сайтов до комплексного продвижения бизнеса в интернете'), new Advantage('1С', 'разработка бухгалтерия, предприятие')
    ]);
    useEffect(() => {
        setWind(window);
    }, [])
    return (
        <div className={stylesMain.block}>
            <div className={stylesMain.articleContainer}>
                <div ref={articleRef} className={stylesMain.article}>
                    Почему выбирают нас
                </div>
            </div>
            {
                wind && wind.innerWidth <= 900 ?
                    <div className={stylesMain.advantagesContainer}>
                        {
                            advantages.map((item, ind) => (
                                <motion.div
                                initial={{transform: (ind+1)%2==0?'translateX(-90%)':'translateX(90%)'}}
                        viewport={{ amount:'some' }}
                                whileInView={{transform: (ind+1)%2==0?'translateX(-10%)':'translateX(10%)'}}
                                transition={{duration: 1}}
                                key={ind+1} style={{overflow:'hidden',width:'100vw',display:'flex',flexDirection:'column',height:'30svh'}}>
                                    <div ref={refs[ind]} className={(ind + 1) % 2 != 1 ? stylesMain.leftAdvantage : stylesMain.rightAdvantage}>
                                        <div className={stylesMain.advantageNum}>
                                            {'0' + (ind + 1)}
                                        </div>
                                        <div className={stylesMain.advantageText}>
                                            <div className={stylesMain.advantageMainText}>
                                                {item.main}
                                            </div>
                                            <div className={stylesMain.advantageSecText}>
                                                {item.sec}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                    :
                    <div className={stylesMain.advantagesContainer}>
                        <motion.div
                        initial={{transform: 'translateX(-90%)'}}
                        whileInView={{transform:['translateX(-90%)','translateX(30%)','translateX(0)']}}
                        viewport={{ amount:'some' }}
                        transition={{duration: 1.5}}
                        className={stylesMain.leftAdvantages}>
                            <div ref={advantage1} className={stylesMain.advantageItem}>
                                <div className={stylesMain.advantageNum}>01</div>
                                <div className={stylesMain.advantageRightText}>
                                    <div className={stylesMain.advantageMainText}>
                                        {advantages[0].main}
                                    </div>
                                    <div className={stylesMain.advantageSecText}>
                                        {advantages[0].sec}
                                    </div>
                                </div>
                            </div>
                            <div ref={advantage2} className={stylesMain.advantageItem}>
                                <div className={stylesMain.advantageText}>
                                    <div className={stylesMain.advantageMainText}>
                                        {advantages[1].main}
                                    </div>
                                    <div className={stylesMain.advantageSecText}>
                                        {advantages[1].sec}
                                    </div>
                                </div>
                                <div className={stylesMain.advantageRightNum}>02</div>
                            </div>
                        </motion.div>
                        <motion.div
                        initial={{transform:'translateX(90%)'}}
                        whileInView={{transform:['translateX(90%)','translateX(-30%)','translateX(0)']}}
                        viewport={{ amount:'some' }}
                        transition={{duration: 1.5}}
                        className={stylesMain.rightAdvantages}>
                            <div ref={advantage3} className={stylesMain.advantageItem}>
                                <div className={stylesMain.advantageNum}>03</div>
                                <div className={stylesMain.advantageRightText}>
                                    <div className={stylesMain.advantageMainText}>
                                        {advantages[2].main}
                                    </div>
                                    <div className={stylesMain.advantageSecText}>
                                        {advantages[2].sec}
                                    </div>
                                </div>
                            </div>
                            <div ref={advantage4} className={stylesMain.advantageItem}>
                                <div className={stylesMain.advantageRightNum}>04</div>
                                <div className={stylesMain.advantageText}>
                                    <div className={stylesMain.advantageMainText}>
                                        {advantages[3].main}
                                    </div>
                                    <div className={stylesMain.advantageSecText}>
                                        {advantages[3].sec}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
            }
        </div>
    )
}

export default HomeAdvantagesBlock