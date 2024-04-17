import Card from '../card/card';
import NavigationBar from '../navigation-bar/navigationBar';
import image1 from "../../images/img4.jpg";
import image2 from "../../images/img2.jpg";
import "./mainPage.css";
import Eyes from '../eyes/eyes';

const MainPage = () => {
    return (
        <>
            <NavigationBar />
            <Card 
                cardHeader="Hi! I'm Parth Desai."
                cardBody="I'm a software developer with a passion of designing a responsive, customer friendly, complex interfaces and easy to use websites.
                    I have been working in this industry since many years and have loved every single bit of it. This website is just 
                    a small example of my skills, please checkout the different parts and hope you have a good time."
                image={image1}
                height="400px" width="350px" color="white" positionX={"70%"} positionY={"20%"} 
            />
            <Card 
                cardHeader="Move mouse around."
                cardBody="I belive in having some fun with work, so I designed this funny little center piece in the app, do check it out."
                image={image2}
                height="300px" width="450px" color="white" positionX={"5%"} positionY={"60%"} 
            />
            <Eyes />
        </>
    )
};

export default MainPage;