import { Link } from "react-router-dom";
import './navigationBar.css';

const NavigationBar = () => {
    const onDownloadClick = () => {
        fetch("Parth_Resume.pdf").then((response) => {
            response.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                     
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Parth_Resume.pdf";
                alink.click();
            });
        });
    };

    return (
        <div id="navBar" className="navBar">
            <Link className="navBar-home" to="/">Home</Link>
            <div className="navBar-others">
                <Link className="animation" to="/projects">Projects</Link>
                <Link className="animation" to="/about">About</Link>
                <Link className="animation" to="/skills">Skills</Link>
                <Link className="animation" to="/contact">Contact</Link>
            </div>
            <div onClick={() => onDownloadClick()} className="resume">Resume</div>
        </div>
    )
};

export default NavigationBar;