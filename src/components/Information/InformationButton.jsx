import { useDispatch, useSelector } from 'react-redux';
import { setShowInfo } from '../../store/slices/postcode-slices';

export const InformationButton = ({ text }) => {
  const dispatch = useDispatch();
  const showInfo = useSelector((state) => state.postcodes.showInfo);

  const handleChangeView = (e) => {
    const target = e.target.textContent;
    target === 'History' ? dispatch(setShowInfo(false)) : dispatch(setShowInfo(true));
  };

  console.log('text: ', text);

  const buttonStyle =
    showInfo && text === 'Result'
      ? 'bg-indigo-50'
      : !showInfo && text === 'History'
      ? 'bg-indigo-50'
      : 'text-sm text-gray-500';

  return (
    <button
      className={`${buttonStyle}  border border-indigo-200 border-b-0 min-w-[175px] py-1  rounded-md rounded-b-none`}
      onClick={(e) => handleChangeView(e)}
    >
      {text}
    </button>
  );
};
