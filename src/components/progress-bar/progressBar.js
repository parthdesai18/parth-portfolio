import { useEffect } from "react";
import "./progressBar.css";

const ProgressBar = (props) => {
    const {width, setWidth} = props;

    useEffect(() => {
        moveBar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    var i = 0;
    function moveBar() {
        if (i === 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 20);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                    setWidth(width)
                }
            }
        }
    };

    return(
        <>
            <div id="myProgress">
                <div id="myBar"></div>
            </div>
            <span className="percentage">{width} %</span>
        </>
    )
};

export default ProgressBar;