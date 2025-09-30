import NavigationBar from "../navigation-bar/navigationBar";
import { useEffect } from "react";
import Capsule from "../capsule/capsule";
import {lexisDescription} from "../../write-ups/lexis/lexisDescription";
import {frontierDescription} from "../../write-ups/frontier/frontierDescription";
import {sequretekDescription} from "../../write-ups/sequretek/sequretekDescription";
import {capstoneDescription} from "../../write-ups/capstone/capstoneDescription";
import cyber from "../../images/cyber.jpg";
import pharmacy from "../../images/pharmacy.jpg";
import legal from "../../images/legal.jpg";
import travel from "../../images/travel.jpg";
import hap from "../../images/hap.jpg"
import { LexisFeatures } from "../../write-ups/lexis/lexisFeatures";
import { LexisStack } from "../../write-ups/lexis/lexisStack";
import { FrontierFeatures } from "../../write-ups/frontier/frontierFeatures";
import { FrontierStack } from "../../write-ups/frontier/frontierStack";
import "./projects.css";
import { SequretekStack } from "../../write-ups/sequretek/sequretekStack";
import { SequretekFeatures } from "../../write-ups/sequretek/sequretekFeatures";
import { CapstoneFeatures } from "../../write-ups/capstone/capstoneFeatues";
import { CapstoneStack } from "../../write-ups/capstone/capstoneStack";
import { hapDescription } from "../../write-ups/hap/hapDescription";
import { HapFeatures } from "../../write-ups/hap/hapFeatues";
import { HAPStack } from "../../write-ups/hap/hapStack";

const Projects = () => {
    let xCoordinate = 0;

    useEffect(() => {
        const cursor = document.getElementById("cursor");
        const x = cursor.getBoundingClientRect().x;
        xCoordinate = x;
    }, [])


    useEffect(() => {
        const cursor = document.getElementById("cursor");
        document.addEventListener("mousemove", (e) => {
            var mouseX = e.clientX;
            var number = xCoordinate - mouseX;
            if (number > 165) {
                cursor.style.transform = `translate(165px, 0)`;
            } else if (number < -165) {
                cursor.style.transform = `translate(-165px, 0)`;
            } else if (number < 165 || number > -165) {
                cursor.style.transform = `translate(${number}px, 0)`;
            }
        });
    });

    return (
        <>
            <NavigationBar />
            <div className="projectContainer">
                <h2>PR</h2>
                <h2 className="displayY">
                    <div className="eyesP">
                        <span id="cursor" className="pupilProject"></span>
                    </div>
                </h2>
                <h2>JECTS</h2>
            </div>
            <div className="capsuleHolder">
                  <Capsule header="HAP (Princess Cruises)" text="Legacy to cloud migration & new react based app"
                    image={hap}
                    description={hapDescription}
                    features={<HapFeatures />}
                    techStack={<HAPStack />}
                />
                <Capsule header="LexisNexis" text="Microsoft based react app"
                    image={legal}
                    description={lexisDescription}
                    features={<LexisFeatures />}
                    techStack={<LexisStack />}
                />
                <Capsule header="FrontierBPM" text="Pharmacy web application" 
                    image={pharmacy}
                    description={frontierDescription}
                    features={<FrontierFeatures />}
                    techStack={<FrontierStack />}
                />
                <Capsule header="Sequretek" text="Cyber security web applications" 
                    image={cyber}
                    description={sequretekDescription}
                    features={<SequretekFeatures />}
                    techStack={<SequretekStack />}
                />
                <Capsule header="Capstone project" text="Travel based mobile application" 
                    image={travel}
                    description={capstoneDescription}
                    features={<CapstoneFeatures />}
                    techStack={<CapstoneStack />}
                />
            </div>
        </>
    )
}

export default Projects;