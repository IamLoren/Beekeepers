import { RotatingLines } from 'react-loader-spinner';
import { Loading } from './Loader.styled';

const Loader = ({ visible }) => {
  return (
    <Loading>
      <RotatingLines
        visible={visible}
        strokeColor={'#9ebbff'}
        strokeWidth="5"
        animationDuration="5"
        ariaLabel="rotating-lines-loading"
        height="150"
        width="150"
      />
    </Loading>
  );
};
export default Loader;
