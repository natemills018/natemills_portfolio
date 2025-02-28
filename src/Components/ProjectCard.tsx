interface ProjectCardProps {
  cardImageSrc: string;
  title: string;
  description: string;
  btnTitle: string;    

}

const ProjectCard = ({ cardImageSrc, title, description, btnTitle }: ProjectCardProps) => {
    return (<div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={cardImageSrc}
            alt="AstroProject"
            className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">{title}</h2>
          <p className="text-black">{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{btnTitle}</button>
          </div>
        </div>
      </div>)
}
export default ProjectCard;




