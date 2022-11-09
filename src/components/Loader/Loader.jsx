import { Blocks } from 'react-loader-spinner';

export const Loader = () => (
  <Blocks
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{ position: 'absolute', top: '15vh', right: '15vw' }}
    wrapperClass="blocks-wrapper"
  />
);
