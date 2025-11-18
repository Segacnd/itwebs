"use client";

import { useRouter } from "next/navigation";

export default function NotFoundButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()}>
      Вернуться назад ←
    </button>
  );
}
