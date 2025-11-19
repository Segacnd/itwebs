"use client";
import * as styles from "./globales.module.css";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import { sendConsultRequest } from "../../services/sendConsultRequest.service";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { useAppSelector } from "@/store/hooks";
import { Item } from "@/utils/mainWaysItem.util";

// TODO:  убрать ref и заменить на data attribute, form Отдельный и сделать react-hook-form в form
//  создать state в wrapper (useState -> useContext for setOpen)
// modal закрывается с помощью label

const ConsultModal = ({ setOpen }) => {
  let groupState = useAppSelector(
    (state) => state.mainReducer.requestGroup.group
  );
  const [allow, setAllow] = useState(false);
  let container = useRef();
  let component = useRef();
  const open = () => {
    container.current.style.opacity = 1;
    container.current.style.scale = 1;
  };
  const close = () => {
    container.current.style.opacity = 0;
    container.current.style.scale = 0;
    component.current.style.background = "none";
    setTimeout(() => {
      setOpen(false);
    }, 990);
  };
  const defaultState = {
    name: "",
    email: "",
    phone: "",
    comment: "",
    group: groupState,
  };
  const [inputObj, setInputObj] = useState({ ...defaultState });
  const [loading, setLoading] = useState(false);
  const [errorItem, setErrorItem] = useState(null);
  const sendConsultRequests = (e) => {
    setLoading(true);
    e.preventDefault();
    if (!allow) {
      return toast.error(
        "Вы не приняли соглашение на обработку персональных данных"
      );
    }
    if (inputObj.name.length < 2) {
      setLoading(false);
      setErrorItem("name");
      return toast.error("Имя не заполнено!");
    }
    if (inputObj.email.length < 2) {
      setErrorItem("email");
      setLoading(false);
      return toast.error("Почта обязательна к заполнению!");
    }
    if (!/[_a-z-0-9]{5,}\@[a-z]{2,}\.[a-z]{1,}/i.test(inputObj.email)) {
      setLoading(false);
      setErrorItem("email");
      return toast.error("Почта заполнена неверно, укажите действующий адрес");
    }
    sendConsultRequest({ ...inputObj })
      .then((res) => {
        toast.success(res);
        setInputObj({ ...defaultState });
        close();
      })
      .catch((err) => toast.error(err?.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setTimeout(() => open(), 100);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {/* закрывть по label */}
      <div
        ref={component}
        className={styles.modalComponent}
        onClick={(e) => {
          close();
          e.stopPropagation();
        }}
      >
        <div
          ref={container}
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          {/* закрывать по label */}
          <label className={styles.modalCross} htmlFor="modal-consult">
            <Icon icon="line-md:close" width="2vw" color="white" height="2vw" />
          </label>
          <form onSubmit={sendConsultRequests} className={styles.modalItems}>
            <h2>Заявка на консультацию</h2>
            <div className={styles.inputPair}>
              <label>Имя</label>
              <input
                style={{
                  color: errorItem === "name" ? "red" : "",
                  border: errorItem === "name" ? "1px solid red" : "",
                }}
                type="text"
                value={inputObj.name}
                onChange={(e) => {
                  setInputObj((prev) => ({ ...prev, name: e.target.value }));
                  errorItem === "name" && setErrorItem(null);
                }}
                placeholder="Обязательно к заполнению"
              />
            </div>
            <div className={styles.inputPair}>
              <label>Электронная почта</label>
              <input
                type="text"
                style={{
                  color: errorItem === "email" ? "red" : "",
                  border: errorItem === "email" ? "1px solid red" : "",
                }}
                value={inputObj.email}
                onChange={(e) => {
                  setInputObj((prev) => ({ ...prev, email: e.target.value }));
                  errorItem === "email" && setErrorItem(null);
                }}
                placeholder="Обязательно к заполнению"
              />
            </div>
            <div className={styles.inputPair}>
              <label>Номер телефона</label>
              <input
                type="text"
                value={inputObj.phone}
                onChange={(e) =>
                  setInputObj((prev) => ({
                    ...prev,
                    phone:
                      "+" +
                      e.target.value
                        .split("")
                        .filter((item) => /[0-9]/.test(item))
                        .join(""),
                  }))
                }
              />
            </div>
            <div className={styles.inputPair}>
              <label>Ваше сообщение</label>
              <textarea
                type="text"
                value={inputObj.comment}
                onChange={(e) =>
                  setInputObj((prev) => ({ ...prev, comment: e.target.value }))
                }
              />
            </div>
            <div className={styles.policyBlock}>
              <div className={styles.policyInputContainer}>
                <input
                  type="checkbox"
                  value={allow}
                  onChange={() => setAllow((prev) => !prev)}
                />
              </div>
              <div className={styles.policyText}>
                Даю согласие на обработку моих персональных данных
              </div>
            </div>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConsultModal;
