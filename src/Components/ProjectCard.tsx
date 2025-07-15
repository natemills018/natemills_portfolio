interface ProjectCardProps {
  cardImageSrc: string;
  title: string;
  description: string;
  btnTitle: string;    

}

const ProjectCard = ({ cardImageSrc, title, description, btnTitle }: ProjectCardProps) => {
  return (
    <div className="card w-96 glass hover:scale-105 transition-all duration-300">
      <figure className="relative group">
        <img
          src={cardImageSrc}
          alt={title}
          className="w-full h-48 object-cover transition-transform group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-300 to-transparent opacity-0 group-hover:opacity-70 transition-opacity" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">
          {title}
          <div className="badge badge-secondary">New</div>
        </h2>
        <p className="text-base-content/80">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm gap-2">
            {btnTitle}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProjectCard;




