import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export const Modal = ({ image, isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Modal</h2>
      <img src={image} alt="" width="320" />
      <button onClick={onClose}>Close modal</button>
    </ReactModal>
  );
};
