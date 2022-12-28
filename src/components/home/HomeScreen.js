import "./HomeScreen.css";
import Card from "../card/Card.js";
import reactLogo from "../../images/favicon.ico";


const HomeScreen = () => {
    return (
        <div>
            <h1 className="Title">
                My name is <span className="my-name">Alfred Mikhael.</span>
            </h1>

            <p className="sub-text">
                Mathematics and Computer Science student at the University of Toronto
                interested in theoretical computer science, machine learning, and topology.
            </p>

            <h1>
                About Me
            </h1>
            <p>
                I'm Alfred Mikhael, aspiring software developer, university student, and lifeguard trainer.
            </p>

            <h1>
                My Projects
            </h1>
            <div className="grid">
                <div className="grid-item">
                    <Card>
                        <p>Project 1</p>
                    </Card>
                </div>
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
            <h1>
                Technical Skills
            </h1>
            <grid>
                <div className="grid-item">
                    <ion-icon style={{color: "orange"}} name="logo-html5"></ion-icon>
                </div>
                <div className="grid-item">
                    <ion-icon style={{color: "#0f5fff"}}name="logo-css3"></ion-icon>
                </div>
                <div className="grid-item">
                    <ion-icon name="logo-python"></ion-icon>
                </div>
                <div className="grid-item">
                    <img src={reactLogo} alt=""></img>
                </div>
            </grid>

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
                        CSC240: Enriched introduction to the Theory of Computation
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