import { arrowRight } from "../../assets/icons";
import { offer } from "../../assets/images";
import Button from "../../components/Button/Button";

const SpecialOffer = () => {
  return (
    <section className="padding max-container flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1 flex items-center">
        <img
          src={offer}
          alt="shoes offer image"
          width={774}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 text-4xl font-palanquin capitalize font-bold lg:max-w-lg dark:text-white">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-white-400">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text dark:text-white-400">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button text="Shop now" iconUrl={arrowRight} />
          <Button text="Learn more" backgroundColor="bg-white dark:bg-transparent" borderColor="border-slate-gray" textColor="text-slate-gray dark:text-white"/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
