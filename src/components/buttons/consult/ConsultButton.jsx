import { CONSALT_MODAL_ID } from "@/constants/modal-constants";
import styles from "./consultButton.module.css";
import ConsultButtonAnimated from "./ConsultButtonAnimated";

const ConsultButton = (props) => {
  return (
    <label
      htmlFor={CONSALT_MODAL_ID}
      style={{
        ...props.styles,
      }}
      className={styles.consultButton}
    >
      <ConsultButtonAnimated props={props} />
    </label>
  );
};

export default ConsultButton;
