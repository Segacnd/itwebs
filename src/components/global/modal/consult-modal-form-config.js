import { z } from "zod";

export const defaultValues = {
  name: "",
  email: "",
  phone: "",
  comment: "",
};
export const consultFormschema = z.object({
  name: z
    .string()
    .min(2, "Имя это обязательное поле!")
    .max(100, "Слишком длинное имя!"),
  email: z
    .email({
      pattern: /[_a-z-0-9]{5,}\@[a-z]{2,}\.[a-z]{1,}/i,
      error: "Почта заполнена неверно!",
    }),
  phone: z.string().optional(),
  comment: z.string().max(500, "Это тебе не сочинение!").optional(),
});
