import "./CSS/database.css";
import { useEffect, useState } from "react";
import StatsAndInfo from "./components/StatsAndInfo";
// import FSStats from './components/FSStats'
import DbTest from "./components/DbTest";
import UserRankings from "./UserRankings";

function Database({ rikishi, fsHistories }) {
  const [viewState, setViewState] = useState(false);
  const [dbRikishi, setDBRikishi] = useState([]);
  const [rikishiLoaded, setRikishiLoaded] = useState(false);
  const [pageTitle, setPageTitle] = useState("Rikishi Stats & Info");

  useEffect(() => {
    setDBRikishi(rikishi);
    setRikishiLoaded(true);
  }, [rikishi]);

  function changeViewState(e) {
    console.log(e);
    setViewState(e.target.value)
    setPageTitle(e.target.value)
  }

  function visibleTable() {
    if (dbRikishi.length > 0) {
      if (viewState === "Rikishi Stats & Info") {
        return <StatsAndInfo dbRikishi={dbRikishi} />;
      } else if (viewState === "Fantasy Sumo Stats") {
        return <DbTest rikishi={rikishi} fsHistories={fsHistories} />;
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
      {visibleTable()}
      {/* {viewState === false && dbRikishi.length > 0 ? (
        <StatsAndInfo dbRikishi={dbRikishi} />
      ) : (
        <DbTest rikishi={rikishi} fsHistories={fsHistories} />
      )} */}
    </div>
  ) : (
    <h2>loading...</h2>
  );
}

export default Database;
