import { Circles } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <div
      style={{
        justifyContent: `center`,
        display: `flex`,
        marginTop: `100px`,
      }}
    >
      <Circles
        height="70"
        width="70"
        color="blue"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
