import "./HomeScreen.css";


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
                My Projects
            </h1>
            <h1>
                Technical Skills
            </h1>

            <h1>
                Education
            </h1>
            <div className="card">
                <div className="card-header">
                    <h3>
                        University of Toronto <span className="right-align">2021 - Present</span>
                    </h3>
                </div>
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
            </div>
            <div className="card">
                <div className="card-header">
                    <h3> John Fraser Secondary School <span className="right-align"> 2017- 2021</span></h3>
                </div>
                <p> Ontario Secondary School Diploma</p>
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