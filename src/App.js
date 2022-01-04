import React from "react";
import style from "./App.module.css";
import Header from "./Components/header";
import Section from "./Components/section";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";

function App() {
  console.log("Why Bitch");
  return (
    <div className={style.body}>
      <Navbar />
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
