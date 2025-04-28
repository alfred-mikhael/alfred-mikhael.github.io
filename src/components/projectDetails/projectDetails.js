import "./projectDetails.css"
export default function ProjectDetails({link, name, date, languages, desc}) {
    return (
        <div className="project-details">
            <div className="project-details-top">
                <a href={link}><b> {name} </b></a>
                <span className="project-details-secondary"> {date} </span>
                <span className="project-details-secondary"> {languages} </span>
            </div>
            <span className="project-details-secondary"> {desc} </span>
        </div>
    );
};