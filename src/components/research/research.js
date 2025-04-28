import Footer from "../footer/footer.js"
import "./research.css"
import ProjectDetails from "../projectDetails/projectDetails";

export default function ResearchScreen() {
    return (
        <div className="research-page">
            <div className="research-page-content">
                <ProjectDetails 
                    name="Fast algorithms for geometric matching and related problems"
                    link=""
                    languages="Aleksandar Nikolov, Alfred Mikhael"
                    date="Apr. 2025"
                    desc="Abstract: We generalize Zuzic's boosting framework for transshipment to get fast approximation algorithms for minimum cost flow problems with inequalities. We then derive a fast approximation algorithm for min cost euclidean edge cover."
                />
                <ProjectDetails 
                    name="A new approach to the Converse Expander Mixing Lemma"
                    link=""
                    languages="Swastik Kopparty, Alfred Mikhael"
                    date="Jan. 2025"
                    desc="Abstract: We look at a new approach to the converse expander mixing lemma of Bilu and Linial by derandomizing the method of Kahn and Szemeredi, used in proving that random d-regular graphs have eigenvalues of the order square root d."
                />
            </div>
            <Footer />
        </div>
    );
}