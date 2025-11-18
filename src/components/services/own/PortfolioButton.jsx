
import { Icon } from "@iconify/react"
import Link from "next/link"

import * as styles from './portfolioButton.module.css';

const PortfolioButton = () => {
    return (
        <Link className={styles.mainLink} href={'/about/#works'}>
            <div className={styles.text}>
                ПОСМОТРЕТЬ НАШЕ ПОРТФОЛИО
            </div>
            <svg className={styles.svg} viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 12L2 10.5ZM199.061 13.0606C199.646 12.4749 199.646 11.5251 199.061 10.9393L189.515 1.39338C188.929 0.807595 187.979 0.807595 187.393 1.39338C186.808 1.97917 186.808 2.92892 187.393 3.5147L195.879 12L187.393 20.4853C186.808 21.0711 186.808 22.0208 187.393 22.6066C187.979 23.1924 188.929 23.1924 189.515 22.6066L199.061 13.0606ZM2 12L2 13.5L198 13.5L198 12L198 10.5L2 10.5L2 12Z" fill="white" />
            </svg>
        </Link>
    )
}

export default PortfolioButton