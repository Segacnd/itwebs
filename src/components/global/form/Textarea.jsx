import * as styles from "../globales.module.css";
export default function Textarea({ label, name, register }) {
  return (
    <div className={styles.inputPair}>
      <label>{label}</label>
      <textarea {...register(name)} />
    </div>
  );
}
