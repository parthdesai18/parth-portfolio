import { useEffect, useRef, useState } from "react";
import NavigationBar from "../navigation-bar/navigationBar";
import getInTouch from "../../images/homepage.jpg";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    const [isDisable, setIsDisable] = useState(true);
    const [input, setInput] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_pt6e10z', 'template_pk89mve', form.current, {
            publicKey: 'f2le6z-MM9oXF2e8S',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                setInput("");
                setEmail("");
                setText("");
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    useEffect(() => {
        setInput("");
        setEmail("");
        setText("");
    }, []);

    useEffect(() => {
            const textarea = document.getElementById("message");
            textarea.addEventListener("input", function (e) {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
        });
    });

    const inputChange = (e) => {
        setInput(e.target.value);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const textChange = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        if (input && text && email) {
            setIsDisable(false);
        } else setIsDisable(true);
    }, [email, input, text]);

    return (
        <>
            <NavigationBar />
            <img src={getInTouch} alt="Get in touch" height="500px" width="500px" className="imageContact" />
            <div className="contact">
                <div>GET IN TOUCH</div>
                <form ref={form} onSubmit={sendEmail} className="formContact">
                    <input value={input} type="text"  id="name" placeholder="NAME" name="user_name" onChange={inputChange} />
                    <input value={email} type="email" id="email" placeholder="EMAIL" name="user_email" onChange={emailChange} />
                    <textarea value={text} id="message" placeholder="MESSAGE" name="message" onChange={textChange} />
                    <button disabled={isDisable} type="submit" className={isDisable ? "buttonOff" : "buttonOn"}>Let's talk</button>
                </form>
            </div>
        </>
    )
};

export default Contact;