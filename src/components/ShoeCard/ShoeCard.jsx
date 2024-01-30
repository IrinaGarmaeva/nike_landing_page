const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImage}) => {
  function handleClick() {
    if(bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe)
    }
  }

  return (
    <div className={`border-2 rounded-xl ${bigShoeImage === imgUrl.bigShoe ? 'border-coral-red scale-110' : 'border-transparent'} cursor-pointer max-sm:flex-1 hover:scale-105 hover:border-white ease-out duration-300`} onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgUrl.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain"/>
      </div>
    </div>
  )
}

export default ShoeCard
