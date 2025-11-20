import * as styles from '../globales.module.css'
export default function Checkbox({name, register, errors}) {
  return (
         <div style={{ display: "flex", flexDirection: "column", position: 'relative' }}>
           <div className={styles.policyBlock}>
             <div className={styles.policyInputContainer}>
               <input {...register(name)} type="checkbox" />
             </div>
             <div className={styles.policyText}>
               Даю согласие на обработку моих персональных данных
             </div>
           </div>
         <p className={styles.errorInputComponent}>{errors?errors.message: ''}</p>
         </div>
  )
}
