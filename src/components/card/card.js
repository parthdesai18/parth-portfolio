import './card.css';

const Card = ({ cardHeader, cardBody, image, height, width, color, positionX, positionY }) => {

    return (
        <div style={{
            height, width, color, 
            top: positionY, 
            left: positionX
        }} 
            className='card'
        >
            <img className='cardImage' src={`${image}`} alt="pic" />
            <div className="cardOverlay">
                <div className='cardHeader'>{cardHeader}</div>
                <svg className="cardArc"><path></path></svg>   
                <p className='cardBody'>{cardBody}</p>
            </div>
        </div>
    )
};

export default Card;