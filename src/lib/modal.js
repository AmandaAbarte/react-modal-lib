import React from "react";
import "./modal.css";

const Modal = ({ content, close, modalState, closeIcon }) => {
  return (
    modalState && (
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-title">
            <div onClick={close} className="close-modal">
              {closeIcon ? <img src={closeIcon} /> : "X"}
            </div>
          </div>
          <div className="modal-custom-content">{content}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
