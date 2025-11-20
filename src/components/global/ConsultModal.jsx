import * as styles from "./globales.module.css";

import { Icon } from "@iconify/react/dist/iconify.js";

import ConsultModalForm from "./form/ConsultModalForm";
import Loader from "./Loader";
import { CONSALT_MODAL_ID } from "@/constants/modal-constants";

const ConsultModal = ({ loading, setLoading, isOpen }) => {
  return (
    <>
      {loading && <Loader />}
      <div data-open={isOpen} className={styles.modalComponent}>
        <label htmlFor={CONSALT_MODAL_ID} className={styles.modalOverlay} />
        <div data-open={isOpen} className={styles.modalContainer}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{ fontSize: "4em", whiteSpace: 'nowrap'}}>Заявка на консультацию</span>
            <label className={styles.modalCross} htmlFor={CONSALT_MODAL_ID}>
              <Icon
                icon="line-md:close"
                width="2vw"
                color="white"
                height="2vw"
              />
            </label>
          </div>
          <ConsultModalForm setLoading={setLoading} isOpen={isOpen}/>
        </div>
      </div>
    </>
  );
};

export default ConsultModal;
