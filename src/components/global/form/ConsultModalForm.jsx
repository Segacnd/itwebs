"use client";

import { toast } from "react-toastify";
import * as styles from "../globales.module.css";
import { sendConsultRequest } from "@/services/sendConsultRequest.service";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Textarea from "./Textarea";
import { consultFormschema, defaultValues } from "./consult-form-config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import Checkbox from "./Checkbox";

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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.modalItems}>
      <Input name="name" register={register} label="Имя" errors={errors.name} isSubmitting={isSubmitting}/>
      <Input
        name="email"
        register={register}
        label="Электронная почта"
        errors={errors.email}
      />
      <Input
        name="phone"
        register={register}
        errors={errors.phone}
        label="Номер телефона"
        onChange={(e) => {
          const digitsOnly = e.target.value.replace(/\D/g, "");
          e.target.value = digitsOnly;
        }}
        isSubmitting={isSubmitting}
      />
      <Textarea label="Ваше сообщение" name="comment" register={register} errors={errors.comment} isSubmitting={isSubmitting}/>
      <Checkbox name="allow" register={register} errors={errors.allow} isSubmitting={isSubmitting}/>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Отправляется" : "Отправить"}
      </button>
    </form>
  );
}
