import { useState } from 'react';
import Card from '../card/Card';
import "./ContactScreen.css";

const ContactScreen = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <button className="dropdown-button" onClick={() => { setOpen((isOpen) => !isOpen) }}>
                <Card header={<h1>Resume</h1>} topRight={<ion-icon name="chevron-down-outline"></ion-icon>}></Card>
            </button>
            {open &&
                <div>
                    my resume is here
                </div>
            }
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