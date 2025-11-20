import styles from "./logo.module.css";
import Link from "next/link";
import logoWeb from "../../assets/LogoWeb.svg";
import MobileLogo from "../../assets/mobileLogo.svg";
import Image from "next/image";
const HeaderLogo = ({ style }) => {
  return (
    <div className={styles.component} style={style}>
      <Link
        href={"/"}
        className={styles.linkComp}
        style={{ textDecoration: "none" }}
      >
        {/* mobile css dispaly none by wind  > 800 */}
        <Image
          alt="LogoWeb"
          src={logoWeb}
          className={`${styles.logoWeb} `}
        />
        <Image
          alt="MobileLogo"
          src={MobileLogo}
          className={styles.logoMobile}
        />
        <div className={styles.container}>
          <div>ITWEBS</div>
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
