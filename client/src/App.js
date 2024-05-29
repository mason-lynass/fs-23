import "./CSS/index.css";
import "./CSS/media.css";

import { useState, useEffect } from "react";
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
import TeamRankings from './TeamRankings'
// import DbTest from './components/DbTest';
// import HowMany from './components/HowMany';

function App() {
  const basho = 2024.05;
  const [user, setUser] = useState(null);
  const [rikishi, setRikishi] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamsLoaded, setTeamsLoaded] = useState(false);
  const [fsHistories, setFsHistories] = useState([]);

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

  // this is really all of the team names as of 3/7/24
  const goodTeamNames = [
    "mason",
    "bill",
    "lex",
    "bbrockmann1",
    "jimmy",
    "acorn",
    "Joseph",
    "jlynass",
    "nemalie",
    "Ann",
    "emplexus",
    "Hidenotora",
    "heavenhouse",
    "Yamashiro",
    "Wamahada",
    "Seitos",
    "Tetsuba",
    "Bunbukuchagama",
    "Kanashisasu",
    "Dreiden",
    "blackroseyagami",
    "Kohakuho",
    "Hami",
    "Terunozuna",
    "BeskarBeast",
    "Nondescriptusername",
    "sumo-api",
    "Gaijingai",
    "N00bonicplague",
    "maysteve21@gmail.com",
    "Yoshinochin",
    "Izzy",
    "ahecardona",
    "liebesleet",
    "duuudeman@gmail.com",
    "Fuss",
    "Hatt",
    "SkipJam",
    "existentialcats",
    "Dannyfnlanza",
    "yurble",
    "ExtractionWiz",
    "Mokuseinoisu",
    "Flynch",
    "HoberMallow27",
    "Gusoyama",
    "VikingTomi",
    "Flohru",
    "Dannybo",
    "ljvd",
    "mcquello",
    "BrycinHuckeba",
    "Bulldoza",
    "meatslab",
    "wockhardt",
    "cubistpepe",
    "MitchThor",
    "bransby",
    "dalebcooper2",
    "Sumofan811",
    "mkmeese42@gmail.com",
    "Joosh",
    "Ajoyham",
    "clashplaids",
    "meep",
    "Cur_ceph",
    "lonewolf",
    "Pmwilkins",
    "SeattleSumoRiley",
    "mateg0re",
    "Alexh51",
    "jreign",
    "ArmenOzeki",
    "Torafujii",
    "exposrule",
    "justme",
    "Mattador",
    "BobLobLaw",
    "The_Dark_Reach",
    "Saturn's_slammers",
    "baneheart74",
    "Mumrikishi",
    "Matsunofuji",
    "MacLacakop",
    "chung",
    "Melreds",
    "StrictTime",
    "Sezhed",
    "Beeftank",
    "Squidsie",
    "Dankneeton",
    "viski",
    "Bomotosho",
    "Dr.judo",
    "VelasKirk",
    "Ga",
    "Tummydrumming",
    "Lucyviolin27",
    "Salvor",
    "Gneiss1",
    "Parzival",
    "Terunozilla",
    "Mondage",
    "HoustonAstros",
    "Paul.k@email.com",
    "Devaskator",
    "Kotodylan",
    "Hi5",
    "shiftoob",
    "dand",
    "hekanymous",
    "Lenny_Shark",
    "Mowse",
    "codymelhorn",
    "zen",
    "imaginethings",
    "catower",
    "feor",
    "norton",
    "texaskevin",
    "KappyKaiju",
    "PatatoKen",
    "serban.7000",
    "Polyglotninaritai",
    "bervad",
    "Shiawasekiwi",
    "Flosspark",
    "Jimbo",
    "Rikitaro",
    "Flexus27",
    "Bubba",
    "不死鳥島",
    "W4EMBMB",
    "Sirron",
    "nhc1112",
    "Wxf",
    "kj4lcd@gmail.com",
    "Tamanoinu",
    "Kiamster",
    "Atti1xboy",
    "Hrsh",
    "give_pizza_chance",
    "Itchynotoe",
    "ellevee",
    "Andreas",
    "Seitoss",
    "Dephire",
    "pecor",
    "bulldoza",
    "Lx",
    "Hisui",
    "KnottsScary",
    "hotstepdad",
    "Hänschi",
    "thatguy88",
    "AlinaAlpaka",
    "Monolith",
    "mcar7491",
    "Aderb94",
    "Tater",
    "Maddie",
    "DYLAN473messi",
    "bisoh",
    "Autopilot",
    "Wakinnebis",
    "金不死鳥島",
    "Kuniumi",
    "kukulumutxun",
    "bigsumobren",
    "SumoInMyVeins",
    "coletata23",
    "Antimo",
    "Behizain",
    "OSAKIHAKI",
    "Rendezvous",
    "namakemono",
    "SexyEnufBigfoot",
    "20andy02",
    "Joseavv4",
    "Amerikajin",
    "Peachmomma",
    "Bongcena420",
    "JokicInator15",
    "Chuzzy",
    "DutchSumoLover",
    "OishiiDashi😋",
    "KMSHEYA",
    "KDSHeya",
    "RjSoToxic",
    "DemenciaChess",
    "MattGrubb",
    "Ikkemensch",
    "Caninndar",
    "MrChiki",
    "davidrossow",
    "SumoShane",
    "ben@cedargroupak.com",
    "sands",
    "Steve_Da_OG",
    "russellhanson",
    "Donkey",
    "Andrasoyama",
    "Verseau",
    "Hsumo",
    "Hsumoho",
    "KappyKaiju3",
    "srprins",
    "sam",
    "CPmotoharu",
    "dustyjduncan",
    "diogenesofindy",
    "t4bk3y",
    "Miyam",
    "vengaryu",
    "inverse_cramer",
    "maltagoya",
    "smartestmoronx19",
    "BinaryGamez",
    "SANTAKEISHO",
    "Rubak5050",
    "Stoshoryu",
    "hbsnirp",
    "sydneyprins",
    "Gadjira",
    "chriscarr",
    "Tidusmiller",
    "DanielSun",
    "SaruNoTe",
    "Ninjoid",
    "pnguetta",
    "LiviuszBp",
    "koolio",
    "NikkoBarato",
    "Tochinofuji",
    "Lex",
    "Areku",
    "Erno",
    "InfernoWing2",
    "Woodstock-99",
    "Hobbobgob",
    "JaquieDaytona",
    "Jackbean",
    "gaylordbuttsex",
    "kasvot05",
    "zgwolfe",
    "BriGuy",
    "Davefuji",
    "akaoni",
    "TonyM",
    "Kjetil",
    "ejb12sc",
    "HoboapeV2",
    "jaquiedaytona",
    "singleTfuji",
    "Bombadil",
    "justme2",
    "YohaneLynass",
    "MaxPower",
    "meszi222",
    "Bradizaro",
    "ManUFan9225",
    "Slothbjj",
    "tweedledeedum",
    "Andranofuji",
    "mumnuts",
    "stevenschneider",
    "Bornobear",
    "Tazman",
    "Kmd1210",
    "Mitakrumi",
    "Mawatari",
    "byakkoorii",
    "cransford13",
    "sheldenthegirl",
    "Xabel",
    "LauraSumo",
    "HOSHORYUUUUUUU!",
    "FatherDaB",
    "Bette",
    "sergentmajor",
    "moldingham@yahoo.com",
    "NessaSan",
    "H",
    "glorfunk",
    "SloppyJoe",
    "frodo_sagbag",
    "WakatakaPetah",
    "Varlash91",
    "Kevoh",
    "slimey",
    "ballerscuba",
    "DocZoidberg",
    "Zatoichi888",
    "Lumpyfranklin",
    "woodyakc@outlook.com",
    "TJMPDX",
    "sackanutz",
    "Rodsumo",
    "my_style_of_sumo",
    "GODZUKI",
    "Akagitsune",
    "Nikkerdoodle54",
    "Vardist",
    "millersbrewers",
    "FullestJ",
    "drmarioxtreme",
    "stavro",
    "ozeki.run",
    "ExploratorySurgery",
    "HikingIllini",
    "Cam_Clayton",
    "EnnGeeOhh",
    "Matthiass",
    "spiduur",
    "SumoMcSumoFace",
    "vitorpepe",
    "Joseiho",
    "Jampalma",
    "TVFrank",
    "WobbleWeeble",
    "gbuttersnaps",
    "Snake12",
    "zdw",
    "papoiyasu",
    "Pentar",
    "LUCKYKHOLE",
    "someanna",
    "j21jwc",
    "thepersephonies",
    "Marmoris",
    "Xenthea",
    'Jazum',
    'FastCash',
    'andonishiki',
    'SumoMaster696969'
  ];

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
    fetch("/teams")
      .then((r) => r.json())
      .then((teams) => {
        setTeams(teams);
        setTeamsLoaded(true);
      });
    // new
    fetch("/fs_histories")
      .then((r) => r.json())
      .then((r) => setFsHistories(r));
  }, []);

  if (rikishi.length > 0 && fsHistories.length > 0) {
    rikishi.forEach((rikishi) => {
      Object.assign(rikishi, {
        fsHistories: fsHistories.filter(
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
        {/* <Route
          path="/dbtest"
          element={<DbTest fsHistories={fsHistories} rikishi={rikishi} />}
        /> */}
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
              teams={teams}
              goodTeamNames={goodTeamNames}
              fsHistories={fsHistories}
              basho={basho}
            />
          }
        />
        <Route path="/rules" element={<Rules />} />
        <Route path="/terminology" element={<Terminology />} />
        <Route path='/team-rankings' element={<TeamRankings teams={teams}
              teamsLoaded={teamsLoaded} />} />
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
              fsHistories={fsHistories}
              basho={basho}
            />
          }
        />
        <Route
          path="/results"
          element={
            <Results
              rikishi={rikishi}
              teams={teams}
              teamsLoaded={teamsLoaded}
              rankSort={rankSort}
              goodTeamNames={goodTeamNames}
              basho={basho}
            />
          }
        />
        <Route
          path="/database"
          element={
            <Database
              rikishi={rankSort(rikishi, true)}
              fsHistories={fsHistories}
              basho={basho}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
