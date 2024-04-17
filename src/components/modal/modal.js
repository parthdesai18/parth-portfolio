import { useEffect } from "react";
import "./modal.css";

const Modal = ({modal, closeModal, header, text, description, features, techStack}) => {
    return (
        <dialog id="modal" className="modal" open={modal} 
            style={{width: `${window.innerWidth - 220}px` , height: `${window.innerHeight - 180}px`, opacity: 1}}
        >
            <div className="modalHeader">
                <span></span>
                <header className="headerModal">{header} ({text})</header>
                <button className="closeModal" onClick={() => closeModal(false)}>x</button>
            </div>
            <div className="modalDescription">Description</div>
            <div>{description}</div>
            <div className="divider">
                <div> 
                    <div className="modalDescription">Features Implemented</div>
                    <div className="listFT">{features}</div>
                </div>
                <div>
                    <div className="modalDescription">Environment/Tech stack used</div>
                    <div className="listFT">{techStack}</div>
                </div>
            </div>
        </dialog>
    )
};

export default Modal;