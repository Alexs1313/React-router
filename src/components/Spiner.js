import { RotatingLines } from 'react-loader-spinner';

const Spiner = () => {
  return (
    <RotatingLines
      strokeColor="green"
      strokeWidth="5"
      animationDuration="0.75"
      width="20"
      visible={true}
    />
  );
};

export default Spiner;
