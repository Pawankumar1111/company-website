import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "./ProgressProvider";

const Circle4 = () => {
  const [valueEnd, setValueEnd] = React.useState(85);
  return (
    <>
    <div style={{ padding: "40px 40px 40px 40px", margin: "auto" }}>
      <Example>
        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
          {value => <CircularProgressbar value={value} text={`${value}%`} />}
        </ProgressProvider>
      </Example>
    </div>
    </>
  );
};

function Example(props) {
  return (
    <>
      <div style={{   }}>
        <div style={{ width:"72%", marginLeft:30}}>{props.children}</div>
      </div>
    </>
  );
}

export default Circle4;