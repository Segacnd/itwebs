import * as styles from "../globales.module.css";

export default function Input({
  label,
  name,
  isRequired = false,
  errors,
  register,
  onChange,
  pattern = false,
}) {
  return (
    <div className={styles.inputPair}>
      <label>{label}</label>
      <input
        {...register(name, {
          ...(isRequired && { required: "Обязательно к заполнению!" }),
          ...(pattern && { pattern }),
          ...(onChange && { onChange }),
        })}
        style={{
          color: errors ? "red" : "",
          border: errors ? "1px solid red" : "",
        }}
        type="text"
        placeholder={isRequired ? "Обязательно к заполнению": ''}
      />
    </div>
  );
}
