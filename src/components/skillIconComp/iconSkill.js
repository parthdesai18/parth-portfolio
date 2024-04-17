import "../skills/skills.css";

const IconSkill = ({ icon, text}) => {
    return (
        <div className="iconSkill">
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    )
}

export default IconSkill;