import './CSS/index.css';
import './CSS/media.css';

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import { useSound } from "use-sound"

import BG1 from "./images/sumo-background-1.webp"

import Clap from "./audio/sumo-clap.mp3"
import Hyoshigi from "./audio/sumo-hyoshigi.mp3"
import Hakkeyoi from "./audio/sumo-hakkeyoi.mp3"

import NavBar from "./NavBar";
import Homepage from "./Homepage";
import Login from './Login';
import Rules from './Rules';
import Draft from './Draft';
import Results from './Results';
import Database from './Database';
import Account from './Account';
import Terminology from './Terminology';
// import DbTest from './components/DbTest';
// import HowMany from './components/HowMany';

function App() {

  const basho = 2023.9
  const [user, setUser] = useState(null)
  const [rikishi, setRikishi] = useState([])
  const [teams, setTeams] = useState([])
  const [teamsLoaded, setTeamsLoaded] = useState(false)
  const [fsHistories, setFsHistories] = useState([])

  const [clap] = useSound(Clap)
  const [hyoshigi] = useSound(Hyoshigi)
  const [tachiai] = useSound(Hakkeyoi, { volume: 0.5 })

  function rankSort(wrestlers, highest) {
    let sortArray = ["Y", "O", "S", "K", "M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", "M14", "M15", "M16", "M17", "J", "MS"]

    let sortedRikishi = []

    for (let i = 0; i < sortArray.length; i++) {
      let target = wrestlers.filter(r => r.current_rank === sortArray[i])

      // if there's a second argument in the function call, sort them by highest_rank
      if (highest !== null) {
        target = wrestlers.filter(r => r.highest_rank === sortArray[i])
      }
      target.forEach((r) => sortedRikishi.push(r))
    }
    return sortedRikishi
  }

  const goodTeamNames = ['mason', 'acorn', 'Seitos', 'Tetsuba', 'nemalie', 'jlynass', 'Yamashiro', 'Bunbukuchagama', 'emplexus', 'Kanashisasu', 'Dreiden', 'blackroseyagami', 'Kohakuho', 'Hami', 'Terunozuna', 'BeskarBeast', 'Nondescriptusername', 'sumo-api', 'Gaijingai', 'N00bonicplague', 'maysteve21@gmail.com', 'Yoshinochin', 'Izzy', 'ahecardona', 'bill', 'liebesleet', 'duuudeman@gmail.com', 'Fuss', 'Hatt', 'SkipJam', 'existentialcats', 'Dannyfnlanza', 'Bountyhuntre', 'yurble', 'ExtractionWiz', 'Mokuseinoisu', 'Flynch', 'HoberMallow27', 'Gusoyama', 'VikingTomi', 'Flohru', 'Dannybo', 'ljvd', 'mcquello', 'Hidenotora', 'BrycinHuckeba', 'Bulldoza', 'lex', 'meatslab', 'wockhardt', 'cubistpepe', 'bransby', 'MitchThor', 'dalebcooper2', 'Sumofan811', 'mkmeese42@gmail.com', 'Joosh', 'Ajoyham', 'clashplaids', 'freedlund', 'meep', 'Cur_ceph', 'lonewolf', 'Pmwilkins', 'SeattleSumoRiley', 'mateg0re', 'Alexh51', 'Torafujii', 'ArmenOzeki', 'jreign', 'Wamahada', 'justme', 'exposrule', 'Mattador', 'BobLobLaw', 'The_Dark_Reach', "Saturn's_slammers", 'baneheart74', 'Mumrikishi', 'Matsunofuji', 'MacLacakop', 'chung', 'Melreds', 'duder','StrictTime', 'Sezhed', 'pastdense', 'Beeftank', 'Squidsie', 'Dankneeton', 'viski', 'Bomotosho', 'Dr.judo', 'VelasKirk', 'Ga', 'Tummydrumming', 'Lucyviolin27', 'HoberMallow', 'Salvor', 'Gneiss1', 'Parzival', 'Terunozilla', 'Mondage', 'HoustonAstros', 'Paul.k@email.com', 'Devaskator', 'Kotodylan', 'Hi5', 'shiftoob', 'zen', 'texaskevin', 'serban.7000', 'Polyglotninaritai', 'PatatoKen', 'norton', 'Lenny_Shark', 'KappyKaiju', 'imaginethings', 'hekanymous', 'feor', 'codymelhorn', 'catower', '不死鳥島', 'Shiawasekiwi', 'Rikitaro', 'Mowse', 'Jimbo', 'Floospark', 'Flexus27', 'Bubba', 'bervad', 'W4EMBMB', 'Sirron', 'nhc1112', 'Wxf', 'kj4lcd@gmail.com', 'Tamanoinu', 'Kiamster', 'Atti1xboy', 'Hrsh', 'give_pizza_chance', 'Itchynotoe', 'ellevee', 'Andreas', 'Seitoss', 'Dephire', 'pecor', 'bulldoza', 'Lx', 'Hisui', 'KnottsScary', 'hotstepdad']

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

  if (rikishi.length > 0 && fsHistories.length > 0) {
    rikishi.forEach((rikishi) => {
      Object.assign(rikishi, { fsHistories: fsHistories.filter((h) => h.rikishi.shikona === rikishi.shikona) })
    })
  }

  return (
    <div className="App">
      <img id="BI" src={BG1} alt="" rel='preload' />
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
        {/* <Route
          path="/dbtest"
          element={<DbTest fsHistories={fsHistories} rikishi={rikishi} />}
        /> */}
        <Route
          path="/login"
          element={<Login
            setUser={setUser}
            clap={clap}
          />}
        />
        <Route
          path="/account"
          element={<Account user={user} setUser={setUser} rikishi={rikishi} clap={clap} teams={teams} goodTeamNames={goodTeamNames} fsHistories={fsHistories} basho={basho}/>}
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
          element={<Draft user={user} setUser={setUser} rikishi={rikishi} tachiai={tachiai} clap={clap} rankSort={rankSort} fsHistories={fsHistories} basho={basho}/>}
        />
        <Route
          path="/results"
          element={<Results rikishi={rikishi} teams={teams} teamsLoaded={teamsLoaded} rankSort={rankSort} goodTeamNames={goodTeamNames} basho={basho}/>}
        />
        <Route
          path="/database"
          element={<Database rikishi={rankSort(rikishi, true)} fsHistories={fsHistories} basho={basho}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
