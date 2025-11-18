import styles from "./consultButton.module.css";
import ConsultButtonClient from "./ConsultButtonClient";

// TODO:label  связать его с модалкой бургером

const ConsultButton = (props) => {
  return (
    <label
      htmlFor="modal-consult" 
      style={{
        textAlign: "center",
        ...props.styles,
      }}
      className={styles.consultButton}
    >
      <ConsultButtonClient props={props} />
    </label>
  );
};

export default ConsultButton;
