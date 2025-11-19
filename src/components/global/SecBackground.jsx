"use client"
import * as styles from './secBackground.module.css';
import { useRef, useEffect } from 'react';

const SecBackground = () => {
    const scrollRef = useRef();
    let lastScrollPos = 0
    useEffect(() => {
        window && window.addEventListener('scroll', (e) => {
            let scrollTop = window.pageYOffset;
            // if (scrollTop > lastScrollPos) {
            //     //down
            //     if (scrollRef.current.scrollTop <= scrollRef.current.offsetHeight) {
            //         console.log(scrollRef.current.offsetHeight)
            //     }

            // }
            // else {
            //     //up
            //     if (scrollRef.current.scrollTop > 0)
            //         scrollRef.current.scrollTop -= (scrollTop - lastScrollPos) / 2;
            // }
            let curY = (+scrollRef.current.style.transform.toString().replace(/[a-z\(\)]/ig, ''));
            scrollRef.current.style.transform = `translateY(${curY + (lastScrollPos - scrollTop) / 2}px)`;
            lastScrollPos = scrollTop;
        })
    }, []);
    const aligns = ['flex-start', 'flex-end', 'flex-start', 'flex-end', 'flex-start', 'flex-end', 'flex-start', 'flex-end', 'flex-start', 'flex-end', 'flex-start', 'flex-end', 'flex-start', 'flex-end', 'flex-start', 'flex-end', 'flex-start', 'flex-end', 'flex-start', 'flex-end', 'flex-start', 'flex-end', 'flex-start', 'flex-end'];
    return (
        <div className={styles.component}>
            <div ref={scrollRef} className={styles.container}>
                {aligns.map((item, ind) => (
                    <div key={item+ind+Math.random()} style={{display:'flex', flexDirection:'column'}}>
                        <div key={item + ind} className={styles[`${item.replace('-', '')}Sphere`]} style={{ alignSelf: item }}>
                        </div>
                        {(ind+1) % 2 === 0 &&
                        <div key={item+'s'+ind} className={styles.blindLine}>
                            <div className={styles.blindElem} style={{animationDelay:ind+1+'s'}}>

                            </div>
                        </div>
                        }
                    </div>

                ))}
            </div>
        </div>
    )
}

export default SecBackground;