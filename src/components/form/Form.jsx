import { FormButton } from './FormButton';
import { FormInput } from './FormInput';

export const Form = () => {
  return (
    <div className='container border flex justify-center py-8'>
      <form className='flex flex-col gap-2'>
        <FormInput />
        <FormButton />
      </form>
    </div>
  );
};
