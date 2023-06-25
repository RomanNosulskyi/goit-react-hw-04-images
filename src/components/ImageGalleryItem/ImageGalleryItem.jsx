import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { ImageGalleryItemLi, ImageGalleryImg } from './ImageGalleryItem.styled';

export function ImageGalleryItem({
  Card: { id, webformatURL, largeImageURL },
}) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <ImageGalleryItemLi>
      <ImageGalleryImg
        src={webformatURL}
        alt={`Picker with id=${id}`}
        onClick={toggleModal}
      />
      {showModal && <Modal LargeImage={largeImageURL} onClick={toggleModal} />}
    </ImageGalleryItemLi>
  );
}
