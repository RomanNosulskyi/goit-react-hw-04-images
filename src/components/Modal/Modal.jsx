import { useEffect } from 'react';
import { Overlay, ModalBox, ImgXL } from './Modal.styles';
import PropTypes from 'prop-types';
export const Modal =({LargeImage,onClick})=> {
  componentDidMount() {
    window.addEventListener('keydown', handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', handleKeyDown);
  }
  const handleKeyDown = e => {
    if (e.keyCode === 27 || e.currentTarget === e.target) {
      return this.props.onClick();
    }
  };

    const { LargeImage } = this.props;
    return (
      <Overlay onClick={this.handleKeyDown}>
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
