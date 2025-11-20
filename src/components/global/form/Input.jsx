import * as styles from "../globales.module.css";

export default function Input({ label, name, errors, register, onChange}) {
  return (
    <div className={styles.inputPair} style={{ position: "relative" }}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        {...register(name, {
          ...(onChange && { onChange }),
        })}
        style={{
          border: errors ? "1px solid red" : "",
        }}
        type="text"
      />
      <p className={styles.errorInputComponent}>
        {errors ? errors.message : ""}
      </p>
    </div>
  );
}
