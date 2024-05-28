import SingleProduct from "./SingleProduct";

const Products = () => {
  return (
    <div className="my-5">
      <h1 className="text-4xl font-bold text-center">Our Products</h1>
      <div className="flex gap-5 mt-5">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </div>
  );
};

export default Products;
