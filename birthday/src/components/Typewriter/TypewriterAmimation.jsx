import React from "react";
import "./type.css";

const Typewriter = () => {
  return (
    <div id="typewriter">
      <div id="platen">
        <div id="carriage-lever"></div>
        <div id="platen-knob-right"></div>
        <div id="platen-knob-left"></div>
      </div>
      <div id="paper">
        <div id="note">
          Once Again<br />Happy Birthday !<br /><br /><br />With Love,<br />Starlight
        </div>
      </div>
      <div id="body">
        <div id="top"></div>
        <div id="opening">
          <div id="internal-shadow"></div>
          <div id="internal-hollow"></div>
          <div id="internal-board-crop">
            <div id="internal-board"></div>
          </div>
        </div>
        <div id="internal-board2-crop">
          <div id="internal-board2"></div>
        </div>
        <div id="cutaway"></div>
        <div id="front">
          <div id="keyboard"></div>
          <div id="keys"></div>
        </div>
      </div>
    </div>
  );
};

export default Typewriter;
