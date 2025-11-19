
import * as styles from './background.module.css'

const Background = () => {
    return (
        <div className={styles.bgContainer}>
            <svg className={styles.circleSVG} width="91" height="213" viewBox="0 0 91 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-15 0.5C43.2638 0.5 90.5 47.9556 90.5 106.5C90.5 165.044 43.2638 212.5 -15 212.5C-73.2638 212.5 -120.5 165.044 -120.5 106.5C-120.5 47.9556 -73.2638 0.5 -15 0.5Z" />
            </svg>
            <svg className={styles.firstBox} width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle style={{animationDelay: '0.1'}} cx="5" cy="5" r="5" />
                <circle style={{animationDelay: '0.4'}} cx="5" cy="35" r="5" />
                <circle style={{animationDelay: 0.8}} cx="5" cy="65" r="5" />
                <circle style={{animationDelay: 1.2}} cx="5" cy="95" r="5" />
                <circle style={{animationDelay: 1.6}} cx="35" cy="5" r="5" />
                <circle style={{animationDelay: 1.8}} cx="35" cy="35" r="5" />
                <circle style={{animationDelay: 2}} cx="35" cy="65" r="5" />
                <circle style={{animationDelay: 2.4}} cx="35" cy="95" r="5" />
                <circle style={{animationDelay: 2.8}} cx="65" cy="5" r="5" />
                <circle style={{animationDelay: 3.2}} cx="65" cy="35" r="5" />
                <circle style={{animationDelay: 3.6}} cx="65" cy="65" r="5" />
                <circle style={{animationDelay: 4}} cx="65" cy="95" r="5" />
                <circle style={{animationDelay: 4.4}} cx="95" cy="5" r="5" />
                <circle style={{animationDelay: 4.8}} cx="95" cy="35" r="5" />
                <circle style={{animationDelay: 5.2}} cx="95" cy="65" r="5" />
                <circle style={{animationDelay: 5.4}} cx="95" cy="95" r="5" />
                <circle style={{animationDelay: 5.8}} cx="125" cy="5" r="5" />
                <circle style={{animationDelay: 6.2}} cx="125" cy="35" r="5" />
                <circle style={{animationDelay: 6.6}} cx="125" cy="65" r="5" />
                <circle style={{animationDelay: 7.0}} cx="125" cy="95" r="5" />
            </svg>
            <div className={styles.arrows}>

                <svg className={styles.arrowSVG} width="62" height="73" viewBox="0 0 62 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60 3L3 36.1844V39.3511L60 70" strokeWidth="6" />
                </svg>
                <svg className={styles.arrowSVG} width="43" height="85" viewBox="0 0 43 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 2L3 83" strokeWidth="5" />
                </svg>
                <svg className={styles.arrowSVG} width="62" height="73" viewBox="0 0 62 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3L59 36.1844V39.3511L2 70" strokeWidth="6" />
                </svg>
            </div>
            {/* <div className={styles.flyInput}>
            </div> */}
            <svg className={styles.secondBox} width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle style={{animationDelay: '0.1'}} cx="5" cy="5" r="5" />
                <circle style={{animationDelay: '0.4'}} cx="5" cy="35" r="5" />
                <circle style={{animationDelay: 0.8}} cx="5" cy="65" r="5" />
                <circle style={{animationDelay: 1.2}} cx="5" cy="95" r="5" />
                <circle style={{animationDelay: 1.6}} cx="35" cy="5" r="5" />
                <circle style={{animationDelay: 1.8}} cx="35" cy="35" r="5" />
                <circle style={{animationDelay: 2}} cx="35" cy="65" r="5" />
                <circle style={{animationDelay: 2.4}} cx="35" cy="95" r="5" />
                <circle style={{animationDelay: 2.8}} cx="65" cy="5" r="5" />
                <circle style={{animationDelay: 3.2}} cx="65" cy="35" r="5" />
                <circle style={{animationDelay: 3.6}} cx="65" cy="65" r="5" />
                <circle style={{animationDelay: 4}} cx="65" cy="95" r="5" />
                <circle style={{animationDelay: 4.4}} cx="95" cy="5" r="5" />
                <circle style={{animationDelay: 4.8}} cx="95" cy="35" r="5" />
                <circle style={{animationDelay: 5.2}} cx="95" cy="65" r="5" />
                <circle style={{animationDelay: 5.4}} cx="95" cy="95" r="5" />
                <circle style={{animationDelay: 5.8}} cx="125" cy="5" r="5" />
                <circle style={{animationDelay: 6.2}} cx="125" cy="35" r="5" />
                <circle style={{animationDelay: 6.6}} cx="125" cy="65" r="5" />
                <circle style={{animationDelay: 7.0}} cx="125" cy="95" r="5" />
            </svg>
        </div>
    )
}

export default Background;