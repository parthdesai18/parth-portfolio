import { useEffect } from "react";
import img3 from "../../images/img3.jpg";
import "./eyes.css";

const Eyes = () => {
    useEffect(() => {
        const pupils = document.querySelectorAll(".eye .pupil");
        window.addEventListener("mousemove", (e) => {
            pupils.forEach((pupil => {
                let rect = pupil.getBoundingClientRect();
                let x = (e.pageX - rect.left) / 30 + "px";
                let y = (e.pageY - rect.top) / 30 + "px";
                pupil.style.transform = `translate3d(${x}, ${y}, 0px)`;
            }));
        });
    });

    return (
        <div className="container">
            <div className="eyes">
                <div className="eye">
                    <div className="pupil"></div>
                </div>
                <div className="eye">
                    <div className="pupil"></div>
                </div>
            </div>
            <img src={img3} alt="eyes watching" width="240px" height="220px" className="eyesWatching"></img>
        </div>
    )
};

export default Eyes;