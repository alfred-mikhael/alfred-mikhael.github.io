import "./HomeScreen.css";

import EducationDetails from "../educationDetails/educationDetails.js";
import Footer from "../footer/footer.js"; 

import reactLogo from "../../images/React-icon.svg.png";
import htmlLogo from "../../images/html5.png";
import cssLogo from "../../images/CSS3_logo.svg.png";
import pythonLogo from "../../images/Python-logo-notext.svg.png";
import jsLogo from "../../images/js-logo.png";
import gitLogo from "../../images/Git-Icon-1788C.png";
import cppLogo from "../../images/ISO_C++_Logo.svg.png";
import flutterLogo from "../../images/Google-flutter-logo.png";
import javaLogo from "../../images/java-logo-1.png";
import latexLogo from "../../images/latex-logo.png";
import rLogo from "../../images/Rlogo.png";
import Dropdown from "../dropdown/dropdown.js";
import CLogo from "../../images/c-logo.png";
import PytorchLogo from "../../images/pytorch-logo.png";
import CoverPhoto from "../../images/cover-photo.jpg";


const HomeScreen = () => {
    return (
        <div className="home-page">
            <div className="home-page-content">
                    <h1 className="title">
                        My name is <span className="my-name">Alfred Mikhael</span>
                    </h1>   

                    <div className="header-section">
                        <p>
                            I am an incoming master's student in Cheriton School of Computer Science at the University of Waterloo studying theoretical computer science and spectral graph theory under the supervision of
                            Prof. Lap Chi Lau. 
                            Before that, I was an undergraduate at the University of Toronto where I studied math and computer science, and did research under the 
                            supervision of Prof. Swastik Kopparty and Prof. Aleskandar Nikolov.
                        </p>
                        <img className="cover-photo" src={CoverPhoto}></img>
                    </div>

                    <h2> Research Interests </h2>
                    <Dropdown
                        title="Spectral Graph Theory" 
                        text="The eigenvalues of a graph's adjacency matrix give us some information about combinatorial properties of the graph. 
                            The most famous example of this phenomenon is Cheeger's inequality, which says that the second eigenvalue gives an approximation of the 
                            conductance of a graph. How else are spectral properties of graphs related to combinatorial properties such as expansion? 
                            I am especially interested in the case of high-dimensional expanders and hypergraphs. Practical applications of this theory
                            include markov chain analysis and the pagerank algorithm. Theoretical applications are abundant in complexity theory and cryptography."
                    />
                    <Dropdown 
                        title="Pseudorandomness"
                        text="Randomness in algorithm design and complexity theory has been an incredibly effective technique 
                        in computer science. We know many ways in which we can use randomness to speed up approximation algorithms 
                        greatly. A natural and interesting question is, do we really need randomness? Can we derandomize 
                        algorithms by using pseudorandom objects, like expander graphs?"
                    />
                    <Dropdown 
                        title="Combinatorics"
                        text="Combinatorics is the mathematical field of counting. The beauty of combinatorics is that problems which are 
                        very easy to explain turn out to be very difficult to solve, and vital in other fields of math. Graph theory is a subfield of combinatorics, and is the 
                        study of networks. This is both a practical and interesting field, as networks are vital in day-to-day life."
                    />

                    <h2>
                        Technical Skills
                    </h2>
                    <div className="tech-skills">
                        <div className="grid-icon">
                            <img className="technical-skill-icon" src={htmlLogo} alt="html logo" title="HTML"></img>
                        </div>
                        <div className="grid-icon">
                            <img className="technical-skill-icon" src={cssLogo} alt="css logo" title="CSS"></img>
                        </div>
                        <div className="grid-icon">
                            <img className="technical-skill-icon" src={pythonLogo} alt="python logo" title="Python 3"></img>
                        </div>
                        <div className="grid-icon">
                            <img className="technical-skill-icon" src={reactLogo} alt="react logo" title="React"></img>
                        </div>
                        <div className="grid-icon">
                            <img className="technical-skill-icon" src={jsLogo} alt="javascript logo" title="Javascript"></img>
                        </div>
                        <div className="grid-icon">
                            <img className="technical-skill-icon" src={javaLogo} alt="java logo" title="Java 17"></img>
                        </div>
                        <div className="grid-icon">
                            <img className="technical-skill-icon" src={cppLogo} alt="C++ logo" title="C++ 20"></img>
                        </div>
                        <div className="grid-icon">
                            <img className="technical-skill-icon" src={flutterLogo} alt="flutter logo" title="Flutter"></img>
                        </div>
                        <div className="grid-icon">
                            <img className="technical-skill-icon" src={gitLogo} alt="git logo" title="Git"></img>
                        </div>
                        <div className="grid-icon">
                            <img className="technical-skill-icon" src={CLogo} alt="C logo" title="C 17"></img>
                        </div>
                        <div className="grid-icon">
                            <img className="technical-skill-icon" src={latexLogo} alt="latex logo" title="LaTeX"></img>
                        </div>
                        <div className="grid-icon">
                            <img className="technical-skill-icon" src={rLogo} alt="r logo" title="R"></img>
                        </div>
                        <div className="grid-icon">
                            <img className="technical-skill-icon" src={PytorchLogo} alt="pytorch logo" title="PyTorch"></img>
                        </div>
                    </div>

                    <h2>
                        Other Things I'm Interested In
                    </h2>
                    <ul>
                        <li> Computational Complexity</li>
                        <li> Quantum Computing </li>
                        <li> Computer Algebra Systems </li>
                        <li> Cryptography, especially lattice-based </li>
                    </ul>
                    <h2> Favorite Tecnical Books </h2>
                    <ul>
                        <li> The Probabilistic Method, Alon and Spencer </li>
                        <li> Concrete Mathematics, Knuth, Patashnik, and Graham </li>
                        <li> Introduction To The Theory Of Computation, Sipser</li>
                    </ul>
            </div>
            <Footer/>
        </div>
    );
}

export default HomeScreen;