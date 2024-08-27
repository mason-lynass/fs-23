import "./CSS/database.css";
import { useEffect, useState } from "react";
import StatsAndInfo from "./components/StatsAndInfo";
import UserRankings from "./UserRankings";
import NewFSDatabase from "./components/NewFSDatabase";

function Database({ rikishi, fantasySumoHistories }) {
  const [viewState, setViewState] = useState("Rikishi Stats & Info");
  const [dbRikishi, setDBRikishi] = useState([]);
  const [rikishiLoaded, setRikishiLoaded] = useState(false);
  const [pageTitle, setPageTitle] = useState("Rikishi Stats & Info");

  useEffect(() => {
    setDBRikishi(rikishi);
    setRikishiLoaded(true);
  }, [rikishi]);

  function changeViewState(e) {
    setViewState(e.target.textContent)
    setPageTitle(e.target.textContent)
  }

  function visibleTable() {
    if (dbRikishi.length > 0) {
      if (viewState === "Rikishi Stats & Info") {
        return <StatsAndInfo dbRikishi={dbRikishi} />;
      } else if (viewState === "Fantasy Sumo Stats") {
        return <NewFSDatabase rikishi={rikishi} fsHistories={fantasySumoHistories} />
      } else if (viewState === "User Rankings") {
        return <UserRankings />;
      }
    }
  }

  return rikishiLoaded === true ? (
    <div id="DBContainer">
      <div id="DBTop">
        <h1 id="DBTitle">{pageTitle}</h1>
        <div id="DBSubMenu">
            <button onClick={(e) => changeViewState(e)}>Rikishi Stats & Info</button>
            <button onClick={(e) => changeViewState(e)}>Fantasy Sumo Stats</button>
            <button onClick={(e) => changeViewState(e)}>User Rankings</button>
        </div>
      </div>
      <p id="howToSort">
        Click on a column header (basho, average score, kinboshi, etc.) to sort
        by that column
      </p>
      {dbRikishi.length > 0 ? <>{visibleTable()}</> : <h2 style={{textAlign: 'center', margin: '40px auto'}}>loading...</h2>}
    </div>
  ) : (
    <h2>loading...</h2>
  );
}

export default Database;
