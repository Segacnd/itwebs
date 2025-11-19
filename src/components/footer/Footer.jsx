import Link from "next/link";
import * as styles from "./footer.module.css";
import { Icon } from "@iconify/react";
import { FOOTER_COLUMN } from "./footer.config";
import FooterAuthClient from "./FooterAuthClient";
import HeaderLogo from "../header/HeaderLogo";
import { LINK_CONFIG } from "@/config/link-config";

const Footer = () => {
  return (
    <footer className={styles.component}>
      <FooterAuthClient />
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <div className={styles.logoContainer}>
              <HeaderLogo />
            </div>
            <div className={styles.footerTitle}>
              <h6>Технологии - наш иструмент</h6>
              <h6>Результат - ваш сайт</h6>
            </div>
            <div className={styles.footerSocialLinks}>
              <Link
                className={styles.footerSocialLink}
                href={LINK_CONFIG.INSTAGRAM}
              >
                <Icon
                  className={styles.footerSocialIcon}
                  icon="line-md:instagram"
                />
              </Link>
              <Link
                className={styles.footerSocialLink}
                href={LINK_CONFIG.TELEGRAMM}
              >
                <Icon
                  className={styles.footerSocialIcon}
                  icon="line-md:telegram"
                />
              </Link>
            </div>
          </div>
          <div className={styles.footerColumnLinkPages}>
            {FOOTER_COLUMN.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={
                  item.id === "menu" ? styles.footerSubtitle : styles.footerLink
                }
              >
                {item.title}
                {item.id === "menu" && (
                  <div className={styles.linkUnderline}></div>
                )}
              </Link>
            ))}
          </div>
          <div className={styles.footerColumn}>
            <div
              className={styles.footerSubtitle}
              style={{ alignSelf: "center" }}
            >
              Контакты
            </div>
            <Link
              href={LINK_CONFIG.TEL}
              style={{ color: "white", textDecoration: "none" }}
              className={styles.contactItem}
            >
              <Icon
                className={styles.contactItemIcon}
                icon="ic:baseline-phone"
              />
              <p style={{ color: "white" }}>
                +375 29 785 38 25
              </p>
            </Link>
            <Link href={LINK_CONFIG.MAIL} className={styles.contactItem}>
              <Icon
                className={styles.contactItemIcon}
                icon="ic:outline-email"
              />
              its-agency@outlook.com
            </Link>
            <div
              className={styles.footerSubtitle}
              style={{ alignSelf: "center" }}
            >
              Адреса
            </div>
            <Link href={LINK_CONFIG.YANDEX_U} className={styles.contactItem}>
              г. Минск, пр-т Газеты Звязда, д. 16, пом. 42-1
            </Link>
            <Link href={LINK_CONFIG.YANDEX_8} className={styles.contactItem}>
              г. Москва, пр-т Мира, д.102, к. 1, пом. 3/7
            </Link>
          </div>
        </div>
        <div className={styles.footerDown}>
          <div>ООО: "ПрофИнфоТех-С"</div>
          <div>УНП: 193922069</div>
          <Link
            className={styles.policyLink}
            href={"/policy"}
            style={{ maxWidth: "max-content", width: "auto" }}
          >
            Политика обработки персональных данных
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
