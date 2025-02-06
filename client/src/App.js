import "./CSS/index.css";
import "./CSS/media.css";

import { useState, useEffect, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useSound } from "use-sound";

import BG1 from "./images/sumo-background-1.webp";

import Clap from "./audio/sumo-clap.mp3";
import Hyoshigi from "./audio/sumo-hyoshigi.mp3";
import Hakkeyoi from "./audio/sumo-hakkeyoi.mp3";

import NavBar from "./NavBar";
import Homepage from "./Homepage";
import Login from "./Login";
import Rules from "./Rules";
import Draft from "./Draft";
import Results from "./Results";
import Database from "./Database";
import Account from "./Account";
import Terminology from "./Terminology";
import UserRankings from "./UserRankings";
// import NewFSDatabase from "./components/NewFSDatabase";
// import DbTest from './components/DbTest';
// import HowMany from './components/HowMany';

function App() {
  const basho = 2025.01;
  const [user, setUser] = useState(null);
  const [rikishi, setRikishi] = useState([]);
  const [oldTeams, setOldTeams] = useState([]);
  const [oldTeamsLoaded, setOldTeamsLoaded] = useState(false);
  const [newTeams, setNewTeams] = useState([]);
  const [newTeamsLoaded, setNewTeamsLoaded] = useState(false);
  const [fantasySumoHistories, setFantasySumoHistories] = useState([]);

  const [clap] = useSound(Clap);
  const [hyoshigi] = useSound(Hyoshigi);
  const [tachiai] = useSound(Hakkeyoi, { volume: 0.5 });

  function rankSort(wrestlers, highest) {
    let sortArray = [
      "Y",
      "O",
      "S",
      "K",
      "M1",
      "M2",
      "M3",
      "M4",
      "M5",
      "M6",
      "M7",
      "M8",
      "M9",
      "M10",
      "M11",
      "M12",
      "M13",
      "M14",
      "M15",
      "M16",
      "M17",
      "J",
      "MS",
    ];

    let sortedRikishi = [];

    for (let i = 0; i < sortArray.length; i++) {
      let target = wrestlers.filter((r) => r.current_rank === sortArray[i]);

      // if there's a second argument in the function call, sort them by highest_rank
      if (highest !== null) {
        target = wrestlers.filter((r) => r.highest_rank === sortArray[i]);
      }
      target.forEach((r) => sortedRikishi.push(r));
    }
    return sortedRikishi;
  }

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
      }
    });
    fetch("/rikishis")
      .then((r) => r.json())
      .then((r) => {
        const sorted = rankSort(r);
        setRikishi(sorted);
      });
    fetch("/old_teams")
      .then((r) => r.json())
      .then((teams) => {
        setOldTeams(teams);
        setOldTeamsLoaded(true);
      });
    fetch("/new_teams")
      .then((r) => r.json())
      .then((teams) => {
        setNewTeams(teams);
        setNewTeamsLoaded(true);
      });
    fetch("/fantasy_sumo_histories")
      .then((r) => r.json())
      .then((r) => setFantasySumoHistories(r));
  }, []);

  useEffect(() => {
    setUser(user);
  }, [user]);

  const sortedRikishi = useMemo(() => rankSort(rikishi), [rikishi]);

  if (rikishi.length > 0 && fantasySumoHistories.length > 0) {
    rikishi.forEach((rikishi) => {
      Object.assign(rikishi, {
        fsHistories: fantasySumoHistories.filter(
          (h) => h.rikishi.shikona === rikishi.shikona
        ),
      });
    });
  }

  return (
    <div className="App">
      <img id="BI" src={BG1} alt="" rel="preload" />
      <NavBar user={user} setUser={setUser} hyoshigi={hyoshigi} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/login"
          element={<Login setUser={setUser} clap={clap} />}
        />
        <Route
          path="/account"
          element={
            <Account
              user={user}
              setUser={setUser}
              rikishi={rikishi}
              clap={clap}
              oldTeams={oldTeams}
              newTeams={newTeams}
              fantasySumoHistories={fantasySumoHistories}
              basho={basho}
            />
          }
        />
        <Route path="/rules" element={<Rules />} />
        <Route path="/terminology" element={<Terminology />} />
        <Route path="/team-rankings" element={<UserRankings />} />
        <Route
          path="/draft"
          element={
            <Draft
              user={user}
              setUser={setUser}
              rikishi={rikishi}
              tachiai={tachiai}
              clap={clap}
              rankSort={rankSort}
              basho={basho}
            />
          }
        />
        <Route
          path="/results"
          element={
            <Results
              rikishi={rikishi}
              teams={oldTeams}
              newTeams={newTeams}
              teamsLoaded={oldTeamsLoaded}
              rankSort={rankSort}
              basho={basho}
              user={user}
            />
          }
        />
        <Route
          path="/database"
          element={
            <Database
              rikishi={rankSort(sortedRikishi, true)}
              fantasySumoHistories={fantasySumoHistories}
              basho={basho}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
