import "./ProjectScreen.css";
import Footer from "../footer/footer.js"
import ProjectDetails from "../projectDetails/projectDetails.js";

const ProjectScreen = () => {
    return (
        <div className="project-page">
            <div className="project-page-content">
                <ProjectDetails
                    name="Paper Clustering and Visualization"
                    date="Sep. 2026"
                    languages="Languages: Python"
                    desc="An automated paper discovery and embedding system. Visualize papers by their topic area. Search for papers which use similar techniques across different fields.
                    See a demonstration in the Visualization tab. WIP."
                    link="https://github.com/alfred-mikhael/paper-clustering"
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
                    desc="Implemented state-of-the-art BVH construction heuristics and profiled code with Valgrind to increase performance."
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