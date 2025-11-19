"use client";

import { useState } from "react";
import ConsultModal from "./ConsultModal";

export default function WrapperConsultModal() {
  const [isOpen, setIsOpen] = useState(false);
   const [loading, setLoading] = useState(false);
  return (
    <div>
      {isOpen && <ConsultModal />}
      <button
        id="modal-consult"
        type="button"
        style={{display: 'none'}}
        onClick={() => setIsOpen((prev) => !prev)}
      />
    </div>
  );
}
