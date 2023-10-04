import React,{useState, useRef} from 'react'
// import "./Accrodian.css"
import FuttorBottemService from './Component/FuttorBottemService'
import Chevron from './Chevron'

function Accrodian() {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordian__icon")

    const content = useRef(null)

    function toggleAccordian() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotateState(setActive === "active" ? "accordian__icon":"accordian__icon rotate")

    }
    return(
        <div className="accordian_section"  style={{ background: "#333333" }}>
           <h3  style={{ textAlign: "center" }}>
            <button style={{height:39}} className={`accordian btn btn-link ${setActive}`} onClick={toggleAccordian}>
               Services<br/>
               <Chevron className={`${setRotate}`} width={18} fill={"#fff"} />
            </button>
            </h3>
           
            <div ref={content} style={{maxHeight:`${setHeight}`}} className="accordion-body   accordian-content">
            <FuttorBottemService />
            </div>
        </div>
    )
}
export default Accrodian;