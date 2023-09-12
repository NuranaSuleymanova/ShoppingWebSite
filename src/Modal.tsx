// CustomModal.tsx
import { relative } from 'path';
import React, { ReactNode, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import {GrClose} from 'react-icons/gr';


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode; // Add the children prop here
};

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const modalContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (isOpen) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
    }
      return () => {
       
        modalContentRef.current?.removeEventListener('scroll', handleScroll, true);
      };
    }, [isOpen]);
  
    const handleScroll = (event: Event) => {
      event.stopPropagation();
    };
  
    // Function to handle closing the modal
    const handleCloseModal = () => {
      onClose();
    };
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={handleCloseModal}
      contentLabel="Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
           zIndex: 2000,
        },
      
        content: {
          border: 'none',
          background: 'white',
          // padding: '20px',
          padding:'0px',
          margin:'auto',
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '1000px',
          width:'965px',
          height:'552px',
          overflow:'unset'
        },
       
      }}
    >
     <div ref={modalContentRef} className="modal-content" style={{maxWidth:'965px',height:'552px',display:'flex' ,alignItems:'center',justifyContent:'flex-start'}}>
        {children}
        <button onClick={handleCloseModal} className="icon-ui-close" type="button" style={{position:'absolute',right:'0',top:'0'}}><GrClose size={20}/></button>
      </div>
      
    
    </Modal>
        
      
  );
  
};

export default CustomModal;
