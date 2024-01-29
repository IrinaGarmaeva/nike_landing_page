import { useState, useEffect } from 'react';
import { formatNumber } from '../../common/helpers';

const StatisticCounter = ({label}) => {
  const [animatedStatistics, setAnimatedStatistics] = useState({
    brands: 0,
    shops: 0,
    customers: 0,
  });

  useEffect(() => {
    const animationDuration = 2800;
    const targetStatistics = {
      brands: 1000,
      shops: 500,
      customers: 250000,
    };

    const stepDuration = animationDuration / 100;

    const updatedStatistics = (currentStep) => {
      if (currentStep >= 100) {
        setAnimatedStatistics(targetStatistics);
      } else {
        setTimeout(() => {
          const percentage = (currentStep + 1) / 100;
          setAnimatedStatistics({
            brands: Math.floor(percentage * targetStatistics.brands),
            shops: Math.floor(percentage * targetStatistics.shops),
            customers: Math.floor(percentage * targetStatistics.customers),
          });
          updatedStatistics(currentStep + 1);
        }, stepDuration);
      }
    };
    updatedStatistics(0);
  }, []);

  return (
    <div>
      <p className="text-4xl font-bold font-palanquin">{formatNumber(animatedStatistics[label.toLowerCase()])}+</p>
      <p className="leading-7 font-montserrat text-slate-gray">{label}</p>
    </div>
  );
};

export default StatisticCounter;
