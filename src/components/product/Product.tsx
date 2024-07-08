import { useParams } from 'react-router-dom';

const Product = () => {

  const { id } = useParams();

  return (
    <>
      <h1>Product</h1>
      <h2>{id}</h2>
    </>

  );
};

export default Product;
