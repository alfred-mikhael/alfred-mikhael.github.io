import "./projectDetails.css"
export default function ProjectDetails({link, name, date, languages, desc}) {
    return (
        <div className="project-details">
            <a href={link}><b> {name} </b></a>
            <span className="project-details-secondary"> {date} </span>
            <span className="project-details-secondary"> {languages} </span>
            <span> </span>
            <span className="project-details-secondary"> {desc} </span>
        </div>
    );
};