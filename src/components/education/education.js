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
                                    /> 
                                    <EducationDetails 
                                        name="University of Toronto" 
                                        date="2021-2025"
                                        major="HBSc. in Computer Science and Mathematics"
                                    />
            </div>
            <Footer />
        </div>
    );
}