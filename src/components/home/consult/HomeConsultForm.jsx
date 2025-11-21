"use client";

import { toast } from "react-toastify";
import { sendConsultRequest } from "@/services/sendConsultRequest.service";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues, homeConsultschema } from "./home-consult-form-config";
import Form from "@/components/global/form/Form";
// import * as styles from "./homeConsult.module.css";

const HomeConsultForm = () => {

 const {
	register,
	handleSubmit,
	reset,
	formState: { errors, isSubmitting },
  } = useForm({
	defaultValues,
	resolver: zodResolver(homeConsultschema),
  });

  const onSubmit = async (data) => {
	try {
	  await sendConsultRequest({ ...data, group: "consult" });
	  toast.success("Заявка успешно отправлена!");
	  reset();
	} catch (err) {
	  toast.error(err?.message);
	} 
  };
  return (
    <Form
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      errors={errors}
    />
  );
};

export default HomeConsultForm;
