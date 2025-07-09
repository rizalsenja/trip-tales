import { Toaster } from 'react-hot-toast';
import styles from './ToastProvider.module.scss';

const ToastProvider = () => {
  return (
    <Toaster
      toastOptions={{
        className: styles.toastContainer,
        duration: 4000, 
      }}
    />
  );
};

export default ToastProvider;
