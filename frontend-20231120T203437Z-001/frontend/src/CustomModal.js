import React, { useState } from 'react';
import Modal from 'react-modal';
import Form from './Form';
const CustomModal = ({ imageUrl }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className="image-container">
        <img
          src={require(`./images/mk2.jpg`)} className="cmp"
          onClick={openModal}
          style={{ cursor: '' }}
        />
        <button onClick={openModal} className="open-modal-button">
          REQUEST CUSTOM QUOTE
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
        >
        <Form />
        <br></br>
        <div className='align-div'>
          <button onClick={closeModal} className='question-btnm'>Close</button>
          </div>
        </Modal>
      </div>
    );
  };

export default CustomModal;
