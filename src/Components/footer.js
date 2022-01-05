import React from "react";
import style from "./styles/footer.module.css";
import { Button } from "@mui/material";

function Footer() {
  return (
    <div className={style.body}>
      <p className={style.header}>Get in Touch</p>
      <div className={style.box}>
        <p className={style.box__head}>Why not say Hello</p>
        <Button
          variant="contained"
          style={{
            backgroundColor: "rgb(48, 109, 75)",
            fontSize: 24,
            fontWeight: 600,
            marginBottom: 10,
          }}
          href="mailto:seunemmanuel2255@gmail.com"
        >
          Hello
        </Button>
      </div>
      <div className={style.link__container}>
        <a
          href="https://www.linkedin.com/in/seun-oyewande-6a8a0b224/"
          target="_blank"
          className={style.links}
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Seun2255"
          target="_blank"
          className={style.links}
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="mailto:seunemmanuel2255@gmail.com"
          target="_blank"
          className={style.links}
          rel="noreferrer"
        >
          Email
        </a>
      </div>
    </div>
  );
}

export default Footer;
