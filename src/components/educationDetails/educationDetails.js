import "./educationDetails.css"
export default function EducationDetails({name, date, major, gpa, desc, notes}) {
    return (
        <div className="education-details">
            <b> {name} </b>
            <span className="education-details-secondary"> {date} </span>
            <span className="education-details-secondary"> {major} </span>
            <span className="education-details-secondary"> {gpa} </span>
            <span className="education-details-secondary"> {desc} </span>
            <span className="education-details-secondary"> {notes} </span>
        </div>
    );
};