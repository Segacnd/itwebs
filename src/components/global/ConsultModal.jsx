import * as styles from "./globales.module.css";

import { Icon } from "@iconify/react/dist/iconify.js";

import FormConsultModal from "./form/FormConsultModal";
import Loader from "./Loader";

const ConsultModal = ({ loading, setLoading }) => {
  return (
    <>
      {loading && <Loader />}
      <div data-open={true} className={styles.modalComponent}>
        <div data-open={true} className={styles.modalContainer}>
          {/* закрывать по label */}
          <label className={styles.modalCross} htmlFor="modal-consult">
            <Icon icon="line-md:close" width="2vw" color="white" height="2vw" />
          </label>
          <FormConsultModal setLoading={setLoading} />
        </div>
      </div>
    </>
  );
};

export default ConsultModal;
