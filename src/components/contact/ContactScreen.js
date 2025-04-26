import "./ContactScreen.css";

const ContactScreen = () => {
    return (
        <div>
            <a className="resume-button" href="https://drive.google.com/file/d/1XTJYSi2vZoo_egdp0Ji9FV2XqFWH8X-9/view?usp=sharing" target="_blank" rel="noreferrer">

            </a>

            <div className="button-row">
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

export default ContactScreen;