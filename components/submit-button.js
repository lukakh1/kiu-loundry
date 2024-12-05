import { Loader } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export default function SubmitButton(props) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      className={`${props.className} flex items-center justify-center space-x-1`}
      disabled={pending}
    >
      {pending && <Loader className='animate-spin w-4 h-4' />}
      <span>{props.children}</span>
    </button>
  );
}
