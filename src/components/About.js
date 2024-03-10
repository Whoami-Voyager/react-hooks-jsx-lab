import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Colorado is a pretty cool state to live in and I would highly recommend visiting for the sights</p>
    <img src= {image} alt="I made this"></img>
  </div>;
}

export default About;
