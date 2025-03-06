interface ProjectCardProps {
  cardImageSrc: string;
  title: string;
  description: string;
  btnTitle: string;    

}

const ProjectCard = ({ cardImageSrc, title, description, btnTitle }: ProjectCardProps) => {
    return (
      <div className="card w-96 bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
        <figure className="relative">
          <img
            src={cardImageSrc}
            alt={title}
            className="w-full h-48 object-cover" 
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="font-bold text-2xl text-gray-800 tracking-tight mb-2">
            {title}
          </h2>
          <div className="w-16 h-1 bg-blue-500 mb-4"></div>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {description}
          </p>
          <div className="card-actions">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg 
              transition-all duration-300 hover:bg-blue-700 focus:ring-2 
              focus:ring-blue-500 focus:ring-offset-2">
              {btnTitle}
            </button>
          </div>
        </div>
      </div>
    )
}
export default ProjectCard;




