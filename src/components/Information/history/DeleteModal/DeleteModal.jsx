import { useDispatch, useSelector } from 'react-redux';
import { ModalButton } from './ModalButton';
import dangerIcon from '../../../../assets/danger-icon.svg';
import delIcon from '../../../../assets/del-icon.svg';
import { setModal } from '../../../../store/slices/postcode-slices';

export const DeleteModal = () => {
  const dispatch = useDispatch();
  const toDelete = useSelector((state) => state.postcodes.toDelete);

  const cancelDelete = () => {
    dispatch(setModal(false));
  };
  return (
    <div
      className='fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-20 backdrop-blur-sm transition-opacity duration-300'
      onClick={cancelDelete}
    >
      <div
        className='relative m-4 md:min-w-[22rem] rounded-lg bg-white shadow-2xl p-6 flex flex-col items-center'
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <img className='h-4 absolute right-4 top-4' src={delIcon} alt='' onClick={cancelDelete} />
          <img className='h-14' src={dangerIcon} alt='' />
        </div>
        <div className='flex items-center  md:text-lg py-4'>
          Delete {toDelete} postcode from history tab?
        </div>
        <div className='flex flex-wrap items-center justify-end text-blue-gray-500 gap-4'>
          <ModalButton css='bg-indigo-400 hover:bg-indigo-500 text-white' text='Delete' />
          <ModalButton css='bg-gray-100 hover:bg-gray-200' text='Cancel' />
        </div>
      </div>
    </div>
  );
};
