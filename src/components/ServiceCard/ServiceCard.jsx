const ServiceCard = ({imgUrl, label, subtext}) => {
  return (
    <div className="flex flex-1 flex-col flex-nowrap sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hover:scale-105 ease-out duration-300 dark:bg-gray-800">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgUrl} alt={`${label} icon`} width={24} height={24}/>
      </div>
      <h3 className="font-bold mt-5 font-palanquin text-3xl leading-normal dark:text-white">{label}</h3>
      <p className="text-slate-gray mt-3 break-words font-montserrat text-lg leading-normal dark:text-white-400">{subtext}</p>
    </div>
  )
}

export default ServiceCard
