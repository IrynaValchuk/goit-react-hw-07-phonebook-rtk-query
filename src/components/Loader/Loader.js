import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="47"
      width="47"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e2f2ce', '#daf0c0', '#d6f0b6', '#c9ed9d', '#c6ed95']}
    />
  );
};
