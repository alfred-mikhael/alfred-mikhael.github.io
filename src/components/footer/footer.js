import "./footer.css"

export default function Footer() {
    return (
        <div className="footer-sticky">
            <div className="footer-buttons">
                <a className="footer-button-link" href="https://www.github.com/alfred-mikhael/">
                    <ion-icon name='logo-github' ></ion-icon>
                </a>
                <a className="footer-button-link" href="https://www.linkedin.com/in/alfred-mikhael/">
                    <ion-icon name='logo-linkedin' ></ion-icon>
                </a>
                <a className="footer-button-link" href="mailto:alfred1.mikhael@gmail.com">
                    <ion-icon name='mail-outline'></ion-icon>
                </a>
            </div>
        </div>
    );
};