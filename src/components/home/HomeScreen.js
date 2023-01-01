import "./HomeScreen.css";
import Card from "../card/Card.js";
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
import latexLogo from "../../images/LaTeX_logo.png";
import rLogo from "../../images/Rlogo.png";


const HomeScreen = () => {
    return (
        <div>
            <div className="slide-component">
                <h1 className="Title">
                    My name is <span className="my-name">Alfred Mikhael.</span>
                </h1>
            </div>

            <div className="slide-component">
                <p>
                    A university student at the University of Toronto, studying math and computer science.
                    I have a particular interest in theoretical computer science, machine learning, and topology. I hope to
                    pursue post-graduate studies in math once I finish my degree, specializing in either topology or theoretical computer science;
                    I'm not sure yet!
                </p>
                <p>
                    I also work part-time at the City of Mississauga, as a swim instructor, lifeguard, first aid instructor, and deck coordinator.
                    This has helped me to discover one more passion of mine, which is teaching. Not only am I able to connect with students, I feel that
                    teaching helps me communicate my ideas better and overall gives me a deeper understanding of what I teach.
                </p>
            </div>

            <div className="slide-component">
                <h1>
                    Technical Skills
                </h1>
            </div>
            <div>
                <div>
                    <div className="grid-icon">
                        <img className="technical-skill-icon" src={htmlLogo} alt=""></img>
                    </div>
                    <div className="grid-icon">
                        <img className="technical-skill-icon" src={cssLogo} alt=""></img>
                    </div>
                    <div className="grid-icon">
                        <img className="technical-skill-icon" src={pythonLogo} alt=""></img>
                    </div>
                    <div className="grid-icon">
                        <img className="technical-skill-icon" src={reactLogo} alt=""></img>
                    </div>
                    <div className="grid-icon">
                        <img className="technical-skill-icon" src={jsLogo} alt=""></img>
                    </div>
                    <div className="grid-icon">
                        <img className="technical-skill-icon" src={javaLogo} alt=""></img>
                    </div>
                    <div className="grid-icon">
                        <img className="technical-skill-icon" src={cppLogo} alt=""></img>
                    </div>
                    <div className="grid-icon">
                        <img className="technical-skill-icon" src={flutterLogo} alt=""></img>
                    </div>
                    <div className="grid-icon">
                        <img className="technical-skill-icon" src={gitLogo} alt=""></img>
                    </div>
                    <div className="grid-icon">
                        <img className="technical-skill-icon" src={firebaseLogo} alt=""></img>
                    </div>
                    <div className="grid-icon">
                        <img className="technical-skill-icon" src={latexLogo} alt=""></img>
                    </div>
                    <div className="grid-icon">
                        <img className="technical-skill-icon" src={rLogo} alt=""></img>
                    </div>
                </div>
            </div>

            <h1>
                Education
            </h1>
            < Card header={<h3>University of Toronto</h3>} topRight={<h3>2021 - Present</h3>}>
                <p>
                    Mathematics specialist and Computer Science major: <strong>4.0 cGPA</strong>
                </p>
                <p>
                    Relevant Courses
                </p>
                <ul>
                    <li>
                        CSC240: Enriched introduction to the Theory of Compuicontion
                    </li>
                    <li>
                        CSC265: Enriched Data Structures and Algorithms
                    </li>
                    <li>
                        CSC207: Introduction to Software Design
                    </li>
                    <li>
                        STA247: Probability with Computer Applications
                    </li>
                </ul>
            </Card>
            < Card header={<h3> John Fraser Secondary School </h3>} topRight={<h3>2017- 2021</h3>}>
                <p> Ontario Secondary School Diploma</p>
            </Card>

            <div className="button-row">
                {/* TODO: This is not a card header */}
                <h1 className="card-header">
                    Contact information
                </h1>
                <a className="icon-button" href="https://github.com/SlothfulAlfred" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-github"></ion-icon>
                </a>

                <a className="icon-button" href="https://linkedin.com/in/alfred-mikhael" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>

                <a className="icon-button" href="mailto: alfred1.mikhael@gmail.com" target="_blank" rel="noreferrer">
                    <ion-icon name="mail-open-outline"></ion-icon>
                </a>
            </div>
        </div>
    );
}

export default HomeScreen;