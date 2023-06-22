import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ImageGalleryItemLi, ImageGalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = () => {
  const { showModal, setShowModal } = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const { id, webformatURL, largeImageURL } = this.props.Card;
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
};
