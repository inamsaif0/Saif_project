import React, { useState } from 'react';
import Modal from 'react-modal';

const CustomModal2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className='question-btn2'>VIEW PROCESS</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="custom-modal"
      >
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/9SHXTC3SZ4o?si=M78u9v0YN9Pm5843" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <button onClick={closeModal} className='question-btn2'>Close</button>
      </Modal>
    </div>
  );
};

export default CustomModal2;
