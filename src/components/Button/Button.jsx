const Button = ({text, iconUrl, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`button hover
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full"}`}>
      {text}
      {iconUrl && <img src={iconUrl} alt={text} className="ml-2 rounded-full w-5 h-5"/>}
    </button>
  )
}

export default Button
