
import { useEffect, useState } from "react";
import "./capsule.css";
import Modal from "../modal/modal";

const Capsule = ({header, text, image, description, features, techStack}) => {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const navbar = document.getElementById('navBar');
        navbar.style.opacity = modal ? 0.01 : 1;
    }, [modal]);

    const modalHandler = () => {
        setModal(true);
    }

    return (
        <>
            <div className="capsuleComponent" onClick={modalHandler}>
                <div className="textDivSpan">{header}</div>
                <span className="textDivSpan">{text}</span>
                <img className="imageCapsule" src={image} alt="cyber-security" />
            </div>
            {modal && <Modal modal={modal} closeModal={setModal} header={header} text={text} 
                description={description}
                features={features}
                techStack={techStack}
            />}
        </>
    )
};

export default Capsule;