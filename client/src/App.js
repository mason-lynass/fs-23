import './CSS/index.css';
import './CSS/media.css';

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import { useSound } from "use-sound"

import BG1 from "./images/sumo-background-1.jpeg"

import Clap from "./audio/sumo-clap.wav"
import Hyoshigi from "./audio/sumo-hyoshigi.wav"
import Hakkeyoi from "./audio/sumo-hakkeyoi.wav"

import NavBar from "./NavBar";
import Homepage from "./Homepage";
import Login from './Login';
import Rules from './Rules';
import Draft from './Draft';
import Results from './Results';
import Database from './Database';
import Account from './Account';
import Terminology from './Terminology';

function App() {

  const [user, setUser] = useState(null)
  const [rikishi, setRikishi] = useState([])
  const [teams, setTeams] = useState([])
  const [teamsLoaded, setTeamsLoaded] = useState(false)

  const [clap] = useSound(Clap)
  const [hyoshigi] = useSound(Hyoshigi)
  const [tachiai] = useSound(Hakkeyoi, { volume: 0.5 })

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
    fetch("/rikishis")
      .then(r => r.json())
      .then(r => setRikishi(r))
    fetch("/teams")
      .then(r => r.json())
      .then(teams => {
        setTeams(teams)
        setTeamsLoaded(true)
      })
  }, []);

  // console.log(`in App ${user}`)

  return (
    <div className="App">
      <img id="BI" src={BG1} alt="" />
      <NavBar
        user={user}
        setUser={setUser}
        hyoshigi={hyoshigi}
      />
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/login"
          element={<Login
            setUser={setUser}
            clap={clap}
          />}
        />
        <Route
          path="/account"
          element={<Account user={user} setUser={setUser} rikishi={rikishi} clap={clap} teams={teams} />}
        />
        <Route
          path="/rules"
          element={<Rules />}
        />
        <Route
          path="/terminology"
          element={<Terminology />}
        />
        <Route
          path="/draft"
          element={<Draft user={user} setUser={setUser} rikishi={rikishi} tachiai={tachiai} clap={clap} />}
        />
        <Route
          path="/results"
          element={<Results rikishi={rikishi} teams={teams} teamsLoaded={teamsLoaded}  />}
        />
        <Route
          path="/database"
          element={<Database rikishi={rikishi} />}
        />
      </Routes>
    </div>
  );
}

export default App;
