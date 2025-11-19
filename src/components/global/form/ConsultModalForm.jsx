"use client";

import { toast } from "react-toastify";
import * as styles from "../globales.module.css";
import { sendConsultRequest } from "@/services/sendConsultRequest.service";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Textarea from "./Textarea";

export default function ConsultModalForm({ setLoading }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      comment: "",
      allow: false,
    },
  });

  const onSubmit = (data) => {
    if (!data.allow) {
      return toast.error(
        "Вы не приняли соглашение на обработку персональных данных"
      );
    }
    setLoading(true);
    sendConsultRequest({ ...data, group: "consult" })
      .then((res) => {
        toast.success(res);
        reset();
      })
      .catch((err) => toast.error(err?.message))
      .finally(() => setLoading(false));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.modalItems}>
      <h2>Заявка на консультацию</h2>
      <Input
        name="name"
        register={register}
        isRequired
        label="Имя"
        errors={errors.name}
      />
      <Input
        name="email"
        register={register}
        isRequired
        label="Электронная почта"
        errors={errors.email}
        pattern={{
          value: /[_a-z-0-9]{5,}\@[a-z]{2,}\.[a-z]{1,}/i,
          message: "Почта заполнена неверно, укажите действующий адрес",
        }}
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
      />
      <Textarea label="Ваше сообщение" name="comment" register={register} />

      <div className={styles.policyBlock}>
        <div className={styles.policyInputContainer}>
          <input {...register("allow", { required: true })} type="checkbox" />
        </div>
        {errors.allow && (
          <div className={styles.policyText}>
            Даю согласие на обработку моих персональных данных
          </div>
        )}
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
}
