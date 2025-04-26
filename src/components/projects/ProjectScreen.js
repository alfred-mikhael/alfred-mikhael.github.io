import "./ProjectScreen.css";
import reactLogo from "../../images/React-icon.svg.png";
import htmlLogo from "../../images/html5.png";
import cssLogo from "../../images/CSS3_logo.svg.png";
import pythonLogo from "../../images/Python-logo-notext.svg.png";
import jsLogo from "../../images/jslogo.jpg";
import flutterLogo from "../../images/Google-flutter-logo.png";
import javaLogo from "../../images/java-logo-1.png";
import firebaseLogo from "../../images/firebase-logo.png";

const ProjectScreen = () => {
    return (
        <div className="fade-component">
            <div className="project-screen">
                <h1>
                    My Projects
                </h1>
                <div className="grid">
                    <a href="https://github.com/SlothfulAlfred/SlothfulAlfred.github.io" target="_blank" rel="noreferrer">
                        <div className="grid-item">

                        </div>
                    </a>
                    <a href="https://github.com/CSC207-2022F-UofT/course-project-translate-chat-program" target="_blank" rel="noreferrer">
                        <div className="grid-item">
=
                        </div>
                    </a>
                    <a href="https://github.com/SlothfulAlfred/quiz_app" target="_blank" rel="noreferrer">
                        <div className="grid-item">

                        </div>
                    </a>
                    <a href="https://github.com/Caspian-9/SentimentAnalysis" target="_blank" rel="noreferrer">
                        <div className="grid-item">

                        </div>
                    </a>
                </div>
            </div>

            <h1>
                What I'm currently learning:
            </h1>
            <ul className="learning-list">
                <li>
                    Machine Learning
                </li>
                <li>
                    Mathematica (Computer Algebra System)
                </li>
                <li>
                    Differential Equations
                </li>
                <li>
                    Computer Architecture
                </li>
            </ul>
            <div style={{height: "10vh"}}>
            </div>
        </div>
    );
}

export default ProjectScreen;