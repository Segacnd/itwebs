import * as styles from "./header.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HEADER_NAVIGATION } from "./header.config";
import { LINK_CONFIG } from "@/config/link-config";

const MobileMenu = () => {
  return (
    <div className={styles.mobileMenuComponent}>
      <div className={styles.mobileMenuInner}>
        <label htmlFor="menuToggle" className={styles.mobileMenuCloseButton}>
          <Icon
            className={styles.mobileMenuCloseButtonIcon}
            icon="line-md:close"
          />
        </label>
        <div className={styles.mobileMenuLinkss}>
          <Link className={styles.navLink} href="/">
            Главная
          </Link>
          {HEADER_NAVIGATION.map((item) => (
            <Link
              key={item.title}
              className={
                item.title === "Экспресс разработка"
                  ? styles.expressLink
                  : styles.navLink
              }
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
          <Link className={styles.navLink} href="/vacancies">
            Вакансии
          </Link>
        </div>

        <div className={styles.mobileMenuDown}>
          <Link href={"https://instagram.com/its_belarus"}>
            <Icon
              className={styles.socialLink}
              icon="line-md:instagram"
              width="10vw"
              height="10vw"
            />
          </Link>
          <Link href={LINK_CONFIG.TELEGRAMM}>
            <Icon
              className={styles.socialLink}
              icon="line-md:telegram"
              width="10vw"
              height="10vw"
            />
          </Link>
          <Link href="/" className={styles.mobileMenuLogo}>
            ITWEBS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
