import EducationDetails from "../educationDetails/educationDetails";
import Footer from "../footer/footer.js"
import "./experienceScreen.css"

export default function ExperienceScreen() {
    return (
        <div className="experience-page">
            <div className="experience-page-content">
                <EducationDetails 
                    name="Graduate Research and Teaching Assistant" 
                    date="Sep. 2026 - Present"
                    major="University of Waterloo"
                    desc="Head TA for CS341 S26, TA for CS341 F27, CS115 F26, CS136L W26"
                />
                <EducationDetails 
                    name="Software Developer"
                    date="May 2024 - Aug. 2024"
                    major="Government of Canada"
                    desc="Created robust ETL pipelines using Spark, Kafka, SQL to handle enormous quantities of data. Created RAG pipeline to automate generation of business reports."
                />
                <EducationDetails 
                    name="Teaching Assistant"
                    date="Sep. 2024 - Apr. 2025"
                    major="University of Toronto"
                    desc="Assisted in the delivery of MAT187 and MAT188 to over 1100 students. Graded assignemnts, held office hours, and led tutorial sections."
                />
                {/* <EducationDetails
                    name="Aquatic Deck Coordinator"
                    date="Jan. 2021 - Present"
                    major="City of Mississauga"
                    desc="Ensured smooth and safe delivery of aquatic programs in the city of Mississauga."
                /> */}
            </div>
            <Footer />
        </div>
    );
}