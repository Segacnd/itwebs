import { z } from "zod";

export const defaultValues = {
  name: "",
  email: "",
  phone: "",
  comment: "",
  allow: false,
};
export const consultFormschema = z.object({
  name: z
    .string()
    .min(1, "Имя это обязательное поле!")
    .max(100, "Слишком длинное имя!"),
  email: z
    .email({
      pattern: /[_a-z-0-9]{5,}\@[a-z]{2,}\.[a-z]{1,}/i,
      error: "Почта заполнена неверно!",
    }),
  phone: z.string().optional(),
  comment: z.string().max(500, "Это тебе не сочинение!").optional(),
  allow: z
    .boolean()
    .refine(
      (v) => v === true,
      "Вы не приняли соглашение на обработку персональных данных!"
    ),
});
