import * as styles from "../globales.module.css";
export default function Textarea({ label, name, register, errors }) {
  return (
    <div className={styles.inputPair} style={{position: 'relative'}}>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...register(name)} />
       <p className={styles.errorInputComponent}>{errors?errors.message: ''}</p>
    </div>
  );
}
