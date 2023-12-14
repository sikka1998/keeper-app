import React from "react";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import WeatherApi from "./WeatherApi";

function Header() {
  return (
    <header>
      <h1>Keeper <SpeakerNotesIcon/></h1>
      <h3 className="weather"><WeatherApi /></h3>
    </header>
  );
}

export default Header;
