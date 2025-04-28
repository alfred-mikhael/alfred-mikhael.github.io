import "./ProjectScreen.css";
import Footer from "../footer/footer.js"
import ProjectDetails from "../projectDetails/projectDetails.js";

const ProjectScreen = () => {
    return (
        <div className="project-page">
            <div className="project-page-content">
                <ProjectDetails
                    name="Hypergeometric Summation"
                    date="Apr. 2025"
                    languages="Languages: C"
                    desc="A basic computer algebra system which can manipulate polynomials and implements Zeilberger's algorithm. WIP."
                    link="https://github.com/alfred-mikhael/hypergeom"
                />
                <ProjectDetails
                    name="Personal Website"
                    date="Apr. 2025"
                    languages="Languages: JS, HTML, CSS"
                    desc="Personal website hosted on github pages with information about myself."
                    link="https://github.com/alfred-mikhael/alfred-mikhael.github.io"
                />
                <ProjectDetails
                    name="Ray Tracer"
                    date="June. 2024"
                    languages="Languages: C++"
                    desc="Ray tracer implementation following 'Ray tracing in one weekend' and 'Ray tracing in one week' books. Implemented state-of-the-art BVH construction heuristics and profiled code with Valgrind to increase performance."
                    link="https://github.com/alfred-mikhael/ray-tracing"
                />
                <ProjectDetails
                    name="Deep Learning Assisted Acoustic Side Channel Attack"
                    date="Apr. 2024"
                    languages="Languages: Python"
                    desc="Trained custom CNN and VGG16 model on keystroke audio in order to predict which key is being pressed. Final models had accuracy of over 80%. Joint work with 3 other students."
                    link="https://colab.research.google.com/drive/1Zs1kNkUWQVZjfRq_AKnRx44tppacQTke?usp=sharing"
                />
            </div>
            <Footer />
        </div>
    );
}

export default ProjectScreen;