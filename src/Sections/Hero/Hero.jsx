import { useState } from "react";
import Button from "../../components/Button/Button";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import StatisticCounter from "../../components/StatisticCounter/StatisticCounter";
import { arrowRight } from "../../assets/icons";
import { STATISTICS, SHOES } from "../../common/constants.js";
import { bigShoe1 } from "../../assets/images";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id="home" className="padding-b padding-l padding-r pt-28">
      <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full">
          <h1 className="mt-10 text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold  dark:text-white leading-tight">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 rounded-lg dark:xl:bg-slate-gray">
              The new Arrival
            </span>
            <br />
            <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
          </h1>
          <p className="font-monserrat text-slate-gray text-lg mt-6 mb-14 leading-8 sm:max-w-sm dark:text-white-400">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life
          </p>
          <Button text="Shop now" iconUrl={arrowRight} />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {STATISTICS.map((stat) => (
              <div key={stat.label}>
                <StatisticCounter label={stat.label} />
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex-1 flex justify-center items-center bg-primary bg-hero bg-cover bg-center xl:min-h-screen max-xl:py-40">
          <img
            src={bigShoeImg}
            alt="shoe collection"
            width={610}
            height={500}
            className="object-contain relative z-10"
          />
          <div className="flex flex-row gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {SHOES.map((shoe) => (
              <div key={shoe.bigShoe}>
                <ShoeCard
                  imgUrl={shoe}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImage={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
