import React from "react";
import style from "./styles/section.module.css";
import materialUI from "./img/materialUI.jpg";
import sass from "./img/sass.jpg";
import nextjs from "./img/nextjs.jpg";
import HTML from "./img/HTML.jpg";
import CSS from "./img/css.jpg";
import redux from "./img/redux.jpg";
import js from "./img/Js.jpg";
import python from "./img/python.jpg";
import django from "./img/django.jpg";
import mysql from "./img/mysql.jpg";
import reactnative from "./img/reactnative.jpg";
import react1 from "./img/React.jpg";
import todomain from "./img/primalToDo-main.jpeg";

function Section() {
  return (
    <div className={style.body}>
      <p className={style.head}>Hi, I'm Seun</p>
      <div className={style.center}>
        <div className={style.section}>
          <p className={style.about} id="about">
            About me
          </p>
          <p className={style.about__info} id={style.frontend}>
            I'm a frontend developer that uses React to make cool webapps and
            websites. I took part in the
            <span id="HNG"> eight HNG internship </span>
            and left as one of their finalists. I'm quite but very friendly,
            more of a listener than a talker. I love programming and playing
            games.
          </p>
        </div>
        <div className={style.section}>
          <p className={style.about1}>Frontend</p>
          <p className={style.about__info}>
            I work with React, NEXTjs, javascript and cool libraries like
            react-spring, material UI, SASS etc to make fully responsive and
            interactive webapps.
          </p>
          <div className={style.picroll}>
            <img alt="React" src={react1} id={style.img} />
            <img alt="Javascript" src={js} id={style.img} />
            <img alt="HTML" src={HTML} id={style.img} />
            <img alt="CSS" src={CSS} id={style.img} />
            <img alt="material UI" src={materialUI} id={style.img} />
            <img alt="SASS" src={sass} id={style.img} />
            <img alt="Nextjs" src={nextjs} id={style.img} />
            <img alt="Redux" src={redux} id={style.img} />
          </div>
        </div>
        <div className={style.section}>
          <p className={style.about1}>Backend</p>
          <p className={style.about__info}>
            I first learnt to seriously program with python using Flask
            framework, this lead me to HTML/CSS when i needed to make templates
            for my Flask app. And from there i realized my love for frontend
            development. I'm currently learning to use Django.
          </p>
          <div className={style.picroll}>
            <img alt="Python" src={python} id={style.img} />
            <img alt="Django" src={django} id={style.img} />
            <img alt="MySQL" src={mysql} id={style.img} />
          </div>
        </div>
        <div className={style.section}>
          <p className={style.about1}>Mobile(React Native)</p>
          <p className={style.about__info}>
            Well... i already knew react and who deosn't want to make their own
            mobile app.
          </p>
          <div className={style.picroll}>
            <img alt="React Native" src={reactnative} id={style.img} />
          </div>
        </div>
      </div>
      <div className={style.portfolio}>
        <p className={style.about__portfolio} id="portfolio">
          portfolio
        </p>
        <div className={style.project}>
          <div className={style.left}>
            <p className={style.project__name}>Primal To-Do</p>
            <p className={style.project__info}>
              Making a To-Do list when learning javascript seems like a pretty
              standard first project. I decided to do the same but make it
              slightly more complex by adding animations(react-spring) and state
              management to my first To-Do list web app
            </p>
          </div>
          <div className={style.right}>
            <a
              href="https://primal-to-do.netlify.app/"
              target="_blank"
              rel="noreferrer"
              id={style.link}
            >
              <img alt="Primal To-Do" src={todomain} id={style.project__img} />
              <div className={style.project__hover}>Visit Site</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
