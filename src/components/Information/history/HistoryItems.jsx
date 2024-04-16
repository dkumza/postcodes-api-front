import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  deletePostcode,
  getPostcode,
  toDeletePostcode,
} from '../../../store/actions/postcode-actions';
import delIcon from '../../../assets/del-icon.svg';
import { setModal } from '../../../store/slices/postcode-slices';
import { DeleteModal } from './DeleteModal/DeleteModal';

export const HistoryItems = ({ postcode }) => {
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.postcodes.modal);

  const handleToDelete = (postcode) => {
    dispatch(setModal(true));
    dispatch(toDeletePostcode(postcode));
  };

  const handleSearch = (postcode) => {
    dispatch(getPostcode(postcode));
  };

  return (
    <div>
      {modal && <DeleteModal postcode={postcode} />}
      <div className='hover:cursor-pointer hover:bg-indigo-100 px-2 flex justify-between items-center py-1'>
        <p onClick={() => handleSearch(postcode)}>{postcode}</p>
        <div onClick={() => handleToDelete(postcode)}>
          <img className='h-6 hover:bg-gray-100 rounded-full p-1' src={delIcon} alt='' />
        </div>
      </div>
    </div>
  );
};

HistoryItems.propTypes = {
  postcode: PropTypes.string.isRequired,
};
