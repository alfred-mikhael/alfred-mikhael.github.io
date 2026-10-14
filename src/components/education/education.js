import Footer from "../footer/footer.js"
import "./education.css"
import EducationDetails from "../educationDetails/educationDetails.js";

export default function EducationScreen() {
    return (
        <div className="education-page">
            <div className="education-page-content">
                <EducationDetails
                    name="University of Waterloo"
                    date="2025-2027"
                    major="M.Math in Computer Science"
                    desc="Studying spectral graph theory and approximation algorithms under the supervision of Prof. Lap Chi Lau"
                    notes={"Relevant Coursework: CS798: Multicore Programming, CS854: Transport Layer Protocols, CS860: Coding Theory"}
                /> 
                <EducationDetails 
                    name="University of Toronto" 
                    date="2021-2025"
                    major="HBSc. in Computer Science and Mathematics"
                    desc="GPA 3.99/4.0"
                    notes={"Relevant Coursework: CS457: Computer Networks, CS413: Deep Learning, CS412: Probabilistic Machine Learning"}
                />
                <hr></hr>
                <h3> Awards </h3>
                <EducationDetails 
                    name="Queen Elizabeth II Graduate Scholarship in Science and Technology (QEII-GSST)" 
                    date="May 2026" 
                    major="$15000"
                />
                <EducationDetails 
                    name={"President's Graduate Scholarship"} 
                    date={"May 2026"} 
                    major={"$10000"}
                />
                <EducationDetails
                    name="Dean's List Scholar"
                    date="June 2022 - June 2025"
                />
                <EducationDetails
                    name="Ken Sevick Bursary in Computer Science"
                    date="Apr. 2025"
                    major="$1200"
                />
                <EducationDetails
                    name="Margaret Ronald Taylor and Thomas Paxton Taylor Scholarships in Mathematics"
                    date="Jan. 2025"
                    major="$3600"
                />
                <EducationDetails
                    name="2024 Later Life Learning OSOTF Award"
                    date="Nov. 2024"
                    major="$425"
                />
                <EducationDetails
                    name="Daniel Berlin Scholarship"
                    date="Oct. 2024"
                    major="$1300"
                />
                <EducationDetails
                    name="2023 Later Life Learning OSOTF Award"
                    date="Oct. 2023"
                    major="$400"
                />
                <EducationDetails
                    name="2022 Innis College Alumni & Friends Award"
                    date="Oct. 2022"
                    major="$425"
                />
            </div>
            <Footer />
        </div>
    );
}