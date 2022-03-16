import React from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";
import { FaUserAltSlash, FaUserCheck } from "react-icons/fa";

const Modal = ({ open, onClose , children, message }) => {
  if (!open) return null;
 
  return ReactDom.createPortal(
    <>
      <div className={styles.overlaystyle }>
        <div className={styles.modalstyle}>
                  <div className={styles.header}>{message? <FaUserCheck/>:<FaUserAltSlash/>}</div>
          <div className={styles.body}>{message?'اطلاعات معتبر است':'اطلاعات معتبر نیست'}</div>
          <div className={styles.footer}>
            <button onClick={onClose}>بستن</button>
          </div>
        </div>
      </div>
        
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
