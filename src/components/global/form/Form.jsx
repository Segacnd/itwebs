import Checkbox from "./Checkbox";
import Input from "./Input";
import Textarea from "./Textarea";
import * as styles from '../globales.module.css'
export default function Form({
  variant = '',
  register,
  handleSubmit,
  onSubmit,
  isSubmitting,
  errors,
  isChexbox,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={variant? `${variant}` :styles.modalItems}>
      <Input
        name="name"
        register={register}
        label="Имя"
        errors={errors.name}
        isSubmitting={isSubmitting}
      />
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
      <Textarea
        label="Ваше сообщение"
        name="comment"
        register={register}
        errors={errors.comment}
        isSubmitting={isSubmitting}
      />
      {isChexbox && (
        <Checkbox
          name="allow"
          register={register}
          errors={errors.allow}
          isSubmitting={isSubmitting}
        />
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Отправляется" : "Отправить"}
      </button>
    </form>
  );
}
