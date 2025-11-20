"use client";

import { useState } from "react";
import ConsultModal from "./ConsultModal";
import { CONSALT_MODAL_ID } from "@/constants/modal-constants";

export default function ConsultModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <ConsultModal loading={loading} setLoading={setLoading} isOpen={isOpen} />
      <button
        id={CONSALT_MODAL_ID}
        type="button"
        style={{ display: "none" }}
        onClick={() => setIsOpen((prev) => !prev)}
      />
    </div>
  );
}
