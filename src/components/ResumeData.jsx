
const ResumeData = ({title, passout, description}) => {
  return (
    <div className="flex flex-col sm:gap-3 gap-2">
        <h1 className="text-white group-hover:text-pink font-bold uppercase lg:text-xl sm:text-base md:text-lg">{title}</h1>
        <h5 className="text-light group-hover:text-white lg:text-xl sm:text-base text-sm">{passout}</h5>
        <p className="text-light group-hover:text-white lg:text-xl sm:text-base text-sm">{description}</p>
    </div>
  )
}

export default ResumeData