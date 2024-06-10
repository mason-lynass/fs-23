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
    console.log(e.target);
    setViewState(!viewState);
    // setViewState(e.target)
    // setPageTitle(e.target)
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
      {/* <div id="DBTop">
        <p id="DBTopSpace"> </p>
        <h1 id="DBTitle">
          {viewState === false ? "Rikishi Stats & Info" : "Fantasy Sumo Stats"}
        </h1>
        <button id="DBViewState" onClick={changeViewState}>
          {viewState === false ? "view FS Stats" : "view Rikishi Info"}
        </button>
      </div> */}
      <div id="DBTop">
        <h1>{pageTitle}</h1>
        <button onClick={(e) => changeViewState(e)}>Rikishi Stats & Info</button>
        <button onClick={(e) => changeViewState(e)}>Fantasy Sumo Stats</button>
        <button onClick={(e) => changeViewState(e)}>User Rankings</button>
      </div>
      <p id="howToSort">
        Click on a column header (basho, average score, kinboshi, etc.) to sort
        by that column
      </p>
      {viewState === false && dbRikishi.length > 0 ? (
        <StatsAndInfo dbRikishi={dbRikishi} />
      ) : (
        <DbTest rikishi={rikishi} fsHistories={fsHistories} />
      )}
    </div>
  ) : (
    <h2>loading...</h2>
  );
}

export default Database;
