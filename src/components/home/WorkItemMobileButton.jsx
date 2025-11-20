import Link from "next/link";
import * as styles from "./homeWorks.module.css";
// TODO: этот компонент не используется
const WorkItemMobileButton = ({ link = "/" }) => {
  return (
    <Link href={link} className={styles.workItemMobileButton}>
      подробнее
    </Link>
  );
};

export default WorkItemMobileButton;
