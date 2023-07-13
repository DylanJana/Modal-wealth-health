import React, { useEffect, useState } from 'react'
import './Modal.css'

export default function Modal({children, isSuccesModalOpen= true, onClose=()=>{},onClick=()=>{}}) {
  const [modalIsOpen, setModalIsOpen] = useState(isSuccesModalOpen)

  useEffect(()=> {
    setModalIsOpen(isSuccesModalOpen)
    let body = document.querySelector('body')
    isSuccesModalOpen === true ? body.classList.add('no--scroll') : body.classList.remove('no--scroll') 
  }, [isSuccesModalOpen])

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
