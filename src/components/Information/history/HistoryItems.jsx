import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePostcode, getPostcode } from '../../../store/actions/postcode-actions';
import delIcon from '../../../assets/del-icon.svg';

export const HistoryItems = ({ postcode }) => {
  const dispatch = useDispatch();

  const handleSearch = (postcode) => {
    dispatch(getPostcode(postcode));
  };

  const handleDelete = (postcode) => {
    dispatch(deletePostcode(postcode));
  };

  return (
    <div>
      <div className='hover:cursor-pointer hover:bg-indigo-100 px-2 flex justify-between items-center'>
        <p onClick={() => handleSearch(postcode)}>{postcode}</p>
        <div onClick={() => handleDelete(postcode)}>
          <img className='h-4 hover:bg-red-500 rounded-full p-0.5' src={delIcon} alt='' />
        </div>
      </div>
    </div>
  );
};

HistoryItems.propTypes = {
  postcode: PropTypes.string.isRequired,
};
