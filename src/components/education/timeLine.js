import { dataEducation } from "./dataEducation";
import "./timeLine.css";

const TimeLineItem = ({data}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span>{data.headerText}</span>
            <p>{data.description}</p>
            <time>{data.date}</time>
            <span className="circle" />
        </div>
    </div>
);

const Timeline = () =>
    dataEducation.length > 0 && (
        <div className="timeline-container">
            {dataEducation.map((data, idx) => (
                <TimeLineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline;