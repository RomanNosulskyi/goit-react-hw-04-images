import { useState, useEffect } from 'react';
import Searchbar from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import fetchImages from './Services/Services';
export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setStatus('pending');
    fetchImages(query, page)
      .then(images => {
        if (images.length === 0 && page === 1) {
          return Promise.reject();
        }

        if (images.length === 0 && page > 1) {
          return setStatus('resolved');
        }

        if (page > 1) {
          setImages(prevState => [...prevState, ...images]);
        } else {
          setImages(images);
        }
        setStatus('resolved');
      })
      .catch(() => {
        setStatus('rejected');
      });
  }, [query, page]);

  const handleClickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar onSubmit={setQuery} />
      {images.length !== 0 && <ImageGallery Images={images} />}
      {status === `pending` && <Loader />}
      {images.length < 12 || <Button onClick={handleClickLoadMore} />}
      {showModal && <Modal largeImageURL={largeImageURL} />}
    </>
  );
};
// dfvfsfvsfvs
// dcdcsdcs
