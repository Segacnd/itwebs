import * as styles from "./header.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import HeaderLogo from "./HeaderLogo";
import MobileMenu from "./MobileMenu";
import { HEADER_NAVIGATION } from "./header.config";
import { LINK_CONFIG } from "@/config/link-config";

const Header = () => {
  return (
    <header className={styles.component}>
      <input type="checkbox" id="menuToggle" className={styles.menuToggle} />

      <div className={styles.container}>
        <div className={styles.logo}>
          <HeaderLogo />
        </div>

        <div className={styles.navigation}>
          {HEADER_NAVIGATION.map((item) => (
            <Link key={item.title} className={item.title === 'Экспресс разработка'? styles.expressLink :styles.navLink} href={item.link}>
              {item.title}
              <div className={styles.linkUnderline}></div>
            </Link>
          ))}
        </div>

        <div className={styles.links}>
          <Link href={LINK_CONFIG.INSTAGRAM}>
            <Icon
              className={styles.socialLink}
              icon="line-md:instagram"
              style={{ width: "2vw", height: "2vw" }}
            />
          </Link>
          <Link href={LINK_CONFIG.TELEGRAMM}>
            <Icon
              className={styles.socialLink}
              icon="line-md:telegram"
              style={{ width: "2vw", height: "2vw" }}
            />
          </Link>
          <a href="tel:+375297853825" className={styles.socialLink}>
            +375 (29) 785-38-25
          </a>
        </div>
        {/* бургер */}
        <label htmlFor="menuToggle" className={styles.mobileMenuOpenButton}>
          <img src="/icons/burger.svg" alt="menu" className={styles.burgerImg} />
          <img src="/iсons/close.svg" alt="close" className={styles.closeImg} />
        </label>
      </div>

      {/* Мобил */}
      <MobileMenu />
    </header>
  );
};

export default Header;
