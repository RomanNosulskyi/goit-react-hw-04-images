import React, { useEffect } from 'react';
import { Overlay, ModalBox, ImgXL } from './Modal.styles';
import PropTypes from 'prop-types';

export function Modal({ LargeImage, onClick }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 27 || e.currentTarget === e.target) {
        onClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  return (
    <Overlay onClick={onClick}>
      <ModalBox>
        <ImgXL src={LargeImage} alt="large photo" />
      </ModalBox>
    </Overlay>
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onModalClose: PropTypes.func,
};

export default Modal;
