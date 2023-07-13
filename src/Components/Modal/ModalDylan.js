import React, { useEffect, useState } from 'react'
import './Modal.css'

export default function Modal({children, formIsSuccess= true, onClose=()=>{},onClick=()=>{}}) {
  const [modalIsOpen, setModalIsOpen] = useState(formIsSuccess)

  useEffect(()=> {
    setModalIsOpen(formIsSuccess)
    let body = document.querySelector('body')
    formIsSuccess === true ? body.classList.add('no--scroll') : body.classList.remove('no--scroll') 
  }, [formIsSuccess])

  const handleClose = () => {
    setModalIsOpen(false)
    onClose()
  }

  const resetForm = () => {
    onClick()
  }
  const modal = (
    <div className='modal-container'>
      <div className='modal-content'>
        <p>{children}</p>
        <div className='modal-content__ctas'>
          <button className='btn--plain btn--green' onClick={handleClose}>Retourner au tableau</button>
          <button className='btn--plain btn--green' onClick={resetForm}>Ajouter un nouvel employé</button>
        </div>
      </div>
    </div>
  )
  return (
    modal && modalIsOpen
  )
}
