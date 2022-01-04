import React from "react";
import style from "./styles/header.module.css";
import me from "./img/me.jpg";

function Header() {
  return (
    <div className={style.body}>
      <div className={style.left}>
        <img src={me} alt="Profile pic" className={style.my__pic} />
      </div>
      <div className={style.right}>
        <p className={style.name}>Oyewande Oluwaseun E.</p>
        <p className={style.role}>Frontend developer(React)</p>
      </div>
    </div>
  );
}

export default Header;
