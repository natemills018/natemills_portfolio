interface ProjectCardProps {
  cardImageSrc: string;
  title: string;
  description: string;
  btnTitle: string;    

}

const ProjectCard = ({ cardImageSrc, title, description, btnTitle }: ProjectCardProps) => {
    return (
      <div className="card w-96 bg-primary-content shadow-lg transition-all duration-300 hover:shadow-2xl">
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
          <div className="divider divider-primary mt-1"></div>

          <p className="text-neutral text-base leading-relaxed mb-6">
            {description}
          </p>
          <div className="card-actions">
            <button className="btn-circle btn-info-content">
              {btnTitle}
            </button>
          </div>
        </div>
      </div>
    )
}
export default ProjectCard;




