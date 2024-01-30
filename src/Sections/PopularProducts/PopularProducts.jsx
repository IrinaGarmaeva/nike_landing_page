import { PRODUCTS } from "../../common/constants.js";
import PopularProductCard from "../../components/PopularProductCard/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 padding">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold dark:text-white">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray dark:text-white-400">
          Experience top-notch quality and style with our sough-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
          {PRODUCTS.map((product) => (
            <PopularProductCard key={product.imgURL} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PopularProducts;
