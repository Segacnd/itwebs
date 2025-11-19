"use client";

import { useRouter } from "next/navigation";
import * as styles from "./not-found-button.module.css";

export default function NotFoundButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()} className={styles.buttonLink}>
      Вернуться назад ←
    </button>
  );
}
