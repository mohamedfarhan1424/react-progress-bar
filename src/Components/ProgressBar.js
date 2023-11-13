import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";

function ProgressBar({ data }) {
  const [percentage, setPercentage] = useState(1);

  useEffect(() => {
    let cal = data.completed / data.totaltask;
    setPercentage(cal * 100);
  }, [data]);

  return (
    <div style={{ width: 200, height: 200, padding: "1rem" }}>
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: "butt",
          pathColor: "#015A9E",
        })}
      >
        {data.completed >= data.totaltask ? (
          <div style={{ fontSize: "1.4rem" }}>Done!</div>
        ) : (
          <div
            style={{ textAlign: "center", fontSize: "1.4rem", color: "gray" }}
          >
            <div>
              <span
                style={{
                  color: "blue",
                  fontSize: "3rem",
                  fontWeight: "bold",
                }}
              >
                {data.completed}
              </span>
              /{data.totaltask}
            </div>
            tasks
          </div>
        )}
        <RadialSeparators
          count={30}
          style={{
            background: "#fff",
            width: "10px",
            // This needs to be equal to props.strokeWidth
            height: `${10}%`,
          }}
        />
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default ProgressBar;
