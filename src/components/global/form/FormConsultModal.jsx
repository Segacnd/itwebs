"use client";

import { toast } from "react-toastify";
import * as styles from "../globales.module.css";
import { useAppSelector } from "@/store/hooks";
import { sendConsultRequest } from "@/services/sendConsultRequest.service";
import { useForm } from "react-hook-form";

export default function FormConsultModal({ setLoading }) {
  let groupState = useAppSelector(
    (state) => state.mainReducer.requestGroup.group
  );
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
      group: groupState,
      allow: false,
    },
  });

  const onSubmit = (data) => {
    setLoading(true);
    if (!data.allow) {
      return toast.error(
        "Вы не приняли соглашение на обработку персональных данных"
      );
    }

    sendConsultRequest(data)
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
      <div className={styles.inputPair}>
        <label>Имя</label>
        <input
          {...register("name", { required: "Имя обязательно к заполнению!" })}
          style={{
            color: errors.name ? "red" : "",
            border: errors.name ? "1px solid red" : "",
          }}
          type="text"
          placeholder="Обязательно к заполнению"
        />
      </div>
      <div className={styles.inputPair}>
        <label>Электронная почта</label>
        <input
          type="text"
          {...register("email", {
            required: "Почта обязательна к заполнению!",
            pattern: {
              value: /[_a-z-0-9]{5,}\@[a-z]{2,}\.[a-z]{1,}/i,
              message: "Почта заполнена неверно, укажите действующий адрес",
            },
          })}
          style={{
            color: errors.email ? "red" : "",
            border: errors.email ? "1px solid red" : "",
          }}
          placeholder="Обязательно к заполнению"
        />
      </div>
      <div className={styles.inputPair}>
        <label>Номер телефона</label>
        <input
          type="text"
          {...register("phone")}
          onChange={(e) =>
            e.target.value
              .split("")
              .filter((item) => /[0-9]/.test(item))
              .join("")
          }
        />
      </div>
      <div className={styles.inputPair}>
        <label>Ваше сообщение</label>
        <textarea type="text" {...register("comment")} />
      </div>
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
