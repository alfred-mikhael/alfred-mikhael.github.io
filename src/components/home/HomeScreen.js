import "./HomeScreen.css";
import EducationDetails from "../educationDetails/educationDetails.js";
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
                <h2> Research Interests </h2>
                <h3> Spectral Graph Theory</h3>
                <p>The eigenvalues of a graph's adjacency matrix give us some information about combinatorial properties of the graph. 
                    The most famous example of this phenomenon is Cheeger's inequality, which says that the second eigenvalue gives an approximation of the 
                    conductance of a graph. How else are spectral properties of graphs related to combinatorial properties such as expansion? 
                    I am especially interested in the case of high-dimensional expanders and hypergraphs. Practical applications of this theory
                    include markov chain analysis and the pagerank algorithm. Theoretical applications are abundant in complexity theory and cryptography.
                </p>
                <h3> Randomness and Pseudorandomness </h3>
                <p>
                    Randomness in algorithm design and complexity theory has been an incredibly effective technique 
                    in computer science. We know many ways in which we can use randomness to speed up approximation algorithms 
                    greatly. A natural and interesting question is, do we really <i> need </i> randomness? Can we derandomize 
                    algorithms by using pseudorandom objects, like expander graphs?
                </p>
                <h3> Combinatorics and Graph Theory </h3>
                <p>
                    Combinatorics is the mathematical field of counting. The beauty of combinatorics is that problems which are 
                    very easy to explain turn out to be very difficult to solve, and vital in other fields of math. Graph theory is the 
                    study of networks. This is both a practical and interesting field, as networks are vital in day-to-day life. 
                </p>
            </div>

            <div className="slide-component">
                <h2>
                    Technical Skills
                </h2>
            </div>
                <div className="tech-skills">
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

            <div className="slide-component">
                <h2>
                    Education
                </h2>
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