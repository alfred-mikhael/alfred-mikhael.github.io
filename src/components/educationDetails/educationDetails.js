import "./educationDetails.css"
export default function EducationDetails({name, date, major, gpa, desc, notes}) {
    return (
        <div className="education-details">
            <div className="education-details-top">
                <b> {name} </b>
                <span className="education-details-secondary"> {date} </span>
                <span className="education-details-secondary"> {major} </span>
                <span className="education-details-secondary"> {gpa} </span>
            </div>
            <span className="education-details-secondary"> {desc} </span>
            <span className="education-details-secondary"> {notes} </span>
        </div>
    );
};