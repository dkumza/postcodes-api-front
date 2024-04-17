import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostcode } from '../../../../store/actions/postcode-actions';
import { setModal } from '../../../../store/slices/postcode-slices';

export const ModalButton = ({ css, text }) => {
  const dispatch = useDispatch();
  const toDelete = useSelector((state) => state.postcodes.toDelete);

  const handleDelete = () => {
    dispatch(deletePostcode(toDelete));
    dispatch(setModal(false));
  };

  const cancelDelete = () => {
    dispatch(setModal(false));
  };
  return (
    <div>
      <button
        className={`${css} px-6 h-9 mr-2  text-md border  capitalize  rounded-md`}
        onClick={text === 'Delete' ? handleDelete : cancelDelete}
      >
        {text}
      </button>
    </div>
  );
};

ModalButton.propTypes = {
  css: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
