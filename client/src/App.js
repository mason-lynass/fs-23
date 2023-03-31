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
import DbTest from './components/DbTest';

function App() {

  const [user, setUser] = useState(null)
  const [rikishi, setRikishi] = useState([])
  const [teams, setTeams] = useState([])
  const [teamsLoaded, setTeamsLoaded] = useState(false)
  const [fsHistories, setFsHistories] = useState([])

  const [clap] = useSound(Clap)
  const [hyoshigi] = useSound(Hyoshigi)
  const [tachiai] = useSound(Hakkeyoi, { volume: 0.5 })

  function rankSort (wrestlers, highest) {
    let sortArray = ["Y", "O", "S", "K", "M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M14", "M15", "M16", "M17", "J", "MS"]

    let sortedRikishi = []
    
    for (let i = 0; i < sortArray.length; i++) {
        let target = wrestlers.filter(r => r.current_rank === sortArray[i])
        if (highest !== null) {
          target = wrestlers.filter(r => r.highest_rank === sortArray[i])
        }
        target.forEach((r) => sortedRikishi.push(r))
    }
    return sortedRikishi
  }

  const goodTeamNames = ['mason', 'acorn', 'Seitos', 'Tetsuba', 'nemalie', 'jlynass', 'Yamashiro', 'Bunbukuchagama', 'emplexus', 'Kanashisasu', 'Dreiden', 'blackroseyagami', 'Kohakuho', 'Hami', 'Terunozuna', 'BeskarBeast', 'Nondescriptusername', 'sumo-api', 'Gaijingai', 'N00bonicplague', 'maysteve21@gmail.com', 'Yoshinochin', 'Izzy', 'ahecardona', 'bill', 'liebesleet', 'duuudeman@gmail.com', 'Fuss', 'Hatt', 'SkipJam', 'existentialcats', 'Dannyfnlanza', 'Bountyhuntre', 'yurble', 'ExtractionWiz', 'Mokuseinoisu', 'Flynch', 'HoberMallow27', 'Gusoyama', 'VikingTomi', 'Flohru', 'Dannybo', 'ljvd', 'mcquello', 'Hidenotora']

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
      .then(r => {
        const sorted = rankSort(r)
        setRikishi(sorted)
        })
    fetch("/teams")
      .then(r => r.json())
      .then(teams => {
        setTeams(teams)
        setTeamsLoaded(true)
      })
    // new
    fetch("/fs_histories")
    .then(r => r.json())
    .then(r => setFsHistories(r))
  }, []);

  console.log(user)

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
          path="/dbtest"
          element={<DbTest fsHistories={fsHistories} rikishi={rikishi}/>}
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
          element={<Account user={user} setUser={setUser} rikishi={rikishi} clap={clap} teams={teams} goodTeamNames={goodTeamNames} />}
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
          element={<Draft user={user} setUser={setUser} rikishi={rikishi} tachiai={tachiai} clap={clap} rankSort={rankSort} />}
        />
        <Route
          path="/results"
          element={<Results rikishi={rikishi} teams={teams} teamsLoaded={teamsLoaded} rankSort={rankSort} goodTeamNames={goodTeamNames}/>}
        />
        <Route
          path="/database"
          element={<Database rikishi={rankSort(rikishi, true)} />}
        />
      </Routes>
    </div>
  );
}

export default App;
