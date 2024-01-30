import { star } from "../../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="relative flex flex-1 items-center justify-center flex-col w-full max-sm:w-full hover:scale-105 duration-300 ease-out shadow-lg rounded-lg">
      <img src={imgURL} alt={`${name} product`} height={282} className="cursor-pointer"/>
      <div className="mt-4 flex items-center gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24}/>
        <p className="font-montserrat text-xl leading-normal text-slate-gray dark:text-white-400">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl max-sm:text-lg leading-normal font-semibold font-palaquin text-center cursor-pointer dark:text-white">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl max-sm:text-lg leading-normal">{price}</p>
    </div>
  );
};

export default PopularProductCard;
