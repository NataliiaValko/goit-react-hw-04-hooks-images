import { useEffect } from "react";
import { createPortal } from "react-dom";
import { GrClose } from "react-icons/gr";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleOnClose = () => {
    window.removeEventListener("keydown", handleKeyDown);
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      handleOnClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      handleOnClose();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.content}>
        <button type="button" className={s.button} onClick={handleOnClose}>
          <GrClose />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
