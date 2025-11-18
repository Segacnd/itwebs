"use client";
import { useState } from "react";
import ConsultModal from "./ConsultModal";

export default function WrapperConsultModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen && <ConsultModal setOpen={setIsOpen} />}
      <button
        id="modal-consult"
        type="button"
        style={{ display: "none" }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
      </button>
    </div>
  );
}
