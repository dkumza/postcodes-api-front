import { useDispatch } from 'react-redux';
import { ModalButton } from './ModalButton';
import { deletePostcode } from '../../../../store/actions/postcode-actions';

export const DeleteModal = ({ model }) => {
  return (
    <>
      <div className='flex gap-3 mb-3'>
        <div className='fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-20 backdrop-blur-sm transition-opacity duration-300'>
          <div
            data-dialog='dialog-xs'
            className='relative m-4 w-1/4 min-w-[25%] max-w-[25%] rounded-lg bg-white shadow-2xl'
          >
            <div className='flex items-center p-4  text-xl'>Are you sure to delete?</div>
            <div className='flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500'>
              <ModalButton css='bg-gray-100 hover:bg-gray-200' text='Cancel' />
              <ModalButton css='bg-indigo-300 hover:bg-indigo-400 text-white' text='Delete' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
