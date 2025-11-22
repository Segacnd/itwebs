"use client";

import { toast } from "react-toastify";
// import * as styles from "../globales.module.css";
import { sendConsultRequest } from "@/services/sendConsultRequest.service";
import { useForm } from "react-hook-form";
import { consultFormschema, defaultValues } from "./consult-modal-form-config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import Form from "../form/Form";

export default function ConsultModalForm({ setLoading, isOpen }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: zodResolver(consultFormschema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await sendConsultRequest({ ...data, group: "consult" });
      toast.success("Заявка успешно отправлена!");
      reset();
    } catch (err) {
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen, reset]);
  return (
    <Form
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      errors={errors}
      isChexbox
    />
  );
}
