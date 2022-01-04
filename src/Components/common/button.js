import React, { useState } from "react";
import style from "../styles/button.module.css";
import { useSpring } from "@react-spring/web";

function Button(props) {
  const { name, type } = props;
  const [hover, setHover] = useState(false);

  const bodyProps = useSpring({
    transform: hover ? "scale(1.3,1.3)" : "scale(1,1)",
    borderWidth: hover ? "5px" : "3px",
    from: { transform: "scale(1,1)", borderWidth: "3px" },
    config: { duration: 300 },
  });

  const springProps = useSpring({
    width: hover ? "100%" : "0%",
    from: { width: "0%" },
    config: { duration: 400 },
  });

  return (
    <div
      className={style.body}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onMouseDown={() => setHover(true)}
      style={bodyProps}
    >
      <div className={style.container}>
        <div className={style.name}>{name}</div>
        {type === "special" && (
          <div className={style.underline} style={springProps}></div>
        )}
      </div>
    </div>
  );
}

export default Button;
