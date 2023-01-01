import Card from "../card/Card.js";
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
                            <Card header={<h3>Personal Portfolio</h3>}>
                                <div>
                                    <div className="grid-item">
                                        <img className="project-stack-icon" src={jsLogo} alt=""></img>
                                    </div>
                                    <div className="grid-item">
                                        <img className="project-stack-icon" src={reactLogo} alt=""></img>
                                    </div>
                                    <div className="grid-item">
                                        <img className="project-stack-icon" src={htmlLogo} alt=""></img>
                                    </div>
                                    <div className="grid-item">
                                        <img className="project-stack-icon" src={cssLogo} alt=""></img>
                                    </div>
                                    <p className="description-text">
                                        A personal portfolio I made using React.js, CSS, HTML and javascript. It's
                                        the website you're seeing right now! My first experience with web development.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </a>
                    <a href="https://github.com/CSC207-2022F-UofT/course-project-translate-chat-program" target="_blank" rel="noreferrer">
                        <div className="grid-item">
                            <Card header={<h3>Autotranslate Chat App</h3>}>
                                <div>
                                    <div className="grid-item">
                                        <img className="project-stack-icon" src={javaLogo} alt=""></img>
                                    </div>
                                    <div className="grid-item">
                                        <img className="project-stack-icon" src={firebaseLogo} alt=""></img>
                                    </div>
                                    <p className="description-text">
                                        A chat web app made entirely in Java, which has speech-to-text, autotranaslation,
                                        and allows multiple accounts to add each other as contacts.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </a>
                    <a href="https://github.com/SlothfulAlfred/quiz_app" target="_blank" rel="noreferrer">
                        <div className="grid-item">
                            <Card header={<h3>Flutter Quiz App</h3>}>
                                <div>
                                    <div className="grid-item">
                                        <img className="project-stack-icon" src={flutterLogo} alt=""></img>
                                    </div>
                                    <div className="grid-item">
                                        <img className="project-stack-icon" src={firebaseLogo} alt=""></img>
                                    </div>
                                    <p className="description-text">
                                        A full-stack quiz app made using the Flutter framework. Uses Firestore database for
                                        persistence and has complex animations. My first full-stack app.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </a>
                    <a href="https://github.com/Caspian-9/SentimentAnalysis" target="_blank" rel="noreferrer">
                        <div className="grid-item">
                            <Card header={<h2>Sentiment Analysis</h2>}>
                                <div>
                                    <div className="grid-item">
                                        <img className="project-stack-icon" src={pythonLogo} alt=""></img>
                                    </div>
                                    <p className="description-text">
                                        An app that aggregates data from over 5000 news articles using Scrapy, analyses the
                                        language using NLTK, then visualizes the data using Plotly.
                                    </p>
                                </div>
                            </Card>
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