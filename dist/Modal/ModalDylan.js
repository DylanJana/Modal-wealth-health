import React, { useEffect, useState } from 'react';
import './Modal.css';
export default function Modal({children, formIsSuccess= true, onClose = () => {}, onClick = () => {}}) {
  const [modalIsOpen, setModalIsOpen] = useState(formIsSuccess);
  useEffect(() => {
    setModalIsOpen(formIsSuccess);
    let body = document.querySelector('body');
    formIsSuccess === true ? body.classList.add('no--scroll') : body.classList.remove('no--scroll');
  }, [formIsSuccess]);

  const handleClose = () => {
    setModalIsOpen(false);
    onClose();
  };
  const resetForm = () => {
    onClick();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("p", null, children), /*#__PURE__*/React.createElement("div", {
    className: "modal-content__ctas"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn--plain btn--green",
    onClick: handleClose
  }, "Retourner au tableau"), /*#__PURE__*/React.createElement("button", {
    className: "btn--plain btn--green",
    onClick: resetForm
  }, "Ajouter un nouvel employ\xE9"))));
}