import React from "react";
import { name, city } from "../data/data.js";

const divColor = {
  color: 'firebrick'
}

function Home() {
  return <div id="home">
    <h1 style={divColor}>{name} is a Web Developer from {city}</h1>
  </div>;
}

export default Home;
