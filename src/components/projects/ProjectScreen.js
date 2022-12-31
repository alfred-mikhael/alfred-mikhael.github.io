import Card from "../card/Card.js";
import "./ProjectScreen.css";
import reactLogo from "../../images/React-icon.svg.png";
import htmlLogo from "../../images/html5.png";
import cssLogo from "../../images/CSS3_logo.svg.png";
import pythonLogo from "../../images/Python-logo-notext.svg.png";
import jsLogo from "../../images/jslogo.jpg";
import gitLogo from "../../images/Git-Icon-1788C.png";
import cppLogo from "../../images/ISO_C++_Logo.svg.png";
import flutterLogo from "../../images/Google-flutter-logo.png";
import javaLogo from "../../images/java-logo-1.png";
import firebaseLogo from "../../images/firebase-logo.png";
import latexLogo from "../../images/LaTeX_logo.png"

const ProjectScreen = () => {
    return (
        <div className="project-screen">
            <h1>
                My Projects
            </h1>
            <div className="grid">
                <a>
                    <div className="grid-item">
                        <Card header={<h1>Personal Portfolio</h1>}>
                            <div className="grid">
                                <div className="grid-item">
                                    <img src={jsLogo} alt=""></img>
                                </div>
                            </div>
                        </Card>
                    </div>
                </a>


                <div className="grid-item">
                    <Card>
                        <p>Project 2</p>
                    </Card>
                </div>
                <div className="grid-item">
                    <div className="card">
                        <p> Project 3 </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectScreen;