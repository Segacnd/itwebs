import ModalHeading from '../../global/ModalHeading';
import * as styles from '../adminComponent.module.css';


const RequestCommentModal = (props) => {
    return (
        <div className={styles.modalComponent} onClick={()=>props.setOpen(false)}>
            <div className={styles.commentContainer} onClick={(e)=>e.stopPropagation()}>
                <ModalHeading setOpen={props.setOpen} mt={'4svh'} width='60vw' color='rgba(0,0,0,0.4)' text={`Comment of request №${props.id}`} />
                <div className={styles.commentText}>{props.comment}</div>
            </div>
        </div>
    )
}

export default RequestCommentModal;