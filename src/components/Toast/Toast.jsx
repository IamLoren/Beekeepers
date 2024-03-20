import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledToastContainer = () => {
  const customToastContent = () => (
    <div style={{ color: 'var(--secondary-text)' }} />
  );

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={true}
      draggable={true}
      pauseOnHover={true}
      toastClassName="blue-toast"
      toastContent={customToastContent}
      toastStyle={{
        background: 'var(--accent-bg-color)',
        color: 'var(--secondary-text)',
        width: '300px',
        fontSize: '20px',
        borderRadius: '10px',
      }}
      progressStyle={{ background: 'var(--secondary-text)' }}
      icon={false}
      showOnlyTheLastOne={true}
    />
  );
};
export default StyledToastContainer;
