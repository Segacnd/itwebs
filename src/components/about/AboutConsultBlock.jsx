"use client";
import { useState, useRef } from "react";
import * as globalStyles from "../../styles/app.module.css";
import AboutBlockHeading from "./heading/AboutBlockHeading";
import * as styles from "./about.module.css";
import { sendConsultRequest } from "../../services/sendConsultRequest.service";
import { toast } from "react-toastify";
import Form from "../global/form/Form";
import { useForm } from "react-hook-form";
import { ABOUT_DEFAULT_VALUES, aboutFormschema } from "./consult/about-consult-config";
import { zodResolver } from "@hookform/resolvers/zod";

const AboutConsultBlock = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = useForm({
      defaultValues: ABOUT_DEFAULT_VALUES,
      resolver: zodResolver(aboutFormschema),
    });
  
    const onSubmit = async (data) => {
      try {
        await sendConsultRequest({ ...data, group: "consult" });
        toast.success("Заявка успешно отправлена!");
        toast.info("Ожидайте сообщения менеджера.");
        reset();
      } catch (err) {
        toast.error("К сожалению отправить заявку не получилось");
      } 
    };
  return (
    <div className={globalStyles.block} style={{ height: "auto" }}>
      <div className={styles.consultBlock}>
        <div className={styles.consultTextBlock}>
          <div className={styles.consultBlockHeading}>Ваш бизнес заслуживает сайт с характером</div>
          <div className={styles.consultBlockText}>Запишитесь на консультацию</div>
        </div>
        <Form variant={styles.consultInputs} register={register} errors={errors} handleSubmit={handleSubmit} onSubmit={onSubmit} isSubmitting={isSubmitting}/>
      </div>
    </div>
  );
};

export default AboutConsultBlock;
