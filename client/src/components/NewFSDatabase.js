import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "../CSS/database.css";

function NewFSDatabase({ fsHistories, rikishi }) {
  // const [fsHistories, setFsHistories] = useState([])
  const [viewState, setViewState] = useState("default");
  const [searchOne, setSearchOne] = useState("");
  const [searchTwo, setSearchTwo] = useState("");
  const [newRikishi, setNewRikishi] = useState([]);
  const [retiredState, setRetiredState] = useState(true);
  const [rikishiInfoOpen, setRikishiInfoOpen] = useState(false);
  const [targetRikishi, setTargetRikishi] = useState(null);

  // no 201203, 202103
  const bashosArray = [
    "202511",
    "202509",
    "202507",
    "202505",
    "202503",
    "202501",
    "202411",
    "202409",
    "202407",
    "202405",
    "202403",
    "202401",
    "202311",
    "202309",
    "202307",
    "202305",
    "202303",
    "202301",
    "202211",
    "202209",
    "202207",
    "202205",
    "202203",
    "202201",
    "202111",
    "202109",
    "202107",
    "202105",
    "202101",
    "202011",
    "202009",
    "202007",
    "202005",
    "202003",
    "202001",
    "201911",
    "201909",
    "201907",
    "201905",
    "201903",
    "201901",
    "201811",
    "201809",
    "201807",
    "201805",
    "201803",
    "201801",
    "201711",
    "201709",
    "201707",
    "201705",
    "201703",
    "201701",
    "201611",
    "201609",
    "201607",
    "201605",
    "201603",
    "201601",
    "201511",
    "201509",
    "201507",
    "201505",
    "201503",
    "201501",
    "201411",
    "201409",
    "201407",
    "201405",
    "201403",
    "201401",
    "201311",
    "201309",
    "201307",
    "201305",
    "201303",
    "201301",
    "201211",
    "201209",
    "201207",
    "201205",
    "201201",
    "201111",
    "201109",
    "201107",
    "201105",
    "201103",
    "201101",
    "201011",
    "201009",
    "201007",
    "201005",
    "201003",
    "201001",
    "200911",
    "200909",
    "200907",
    "200905",
    "200903",
    "200901",
    "200811",
    "200809",
    "200807",
    "200805",
    "200803",
    "200801",
    "200711",
    "200709",
    "200707",
    "200705",
    "200703",
    "200701",
    "200611",
    "200609",
    "200607",
    "200605",
    "200603",
    "200601",
    "200511",
    "200509",
    "200507",
    "200505",
    "200503",
    "200501",
    "200411",
    "200409",
    "200407",
    "200405",
    "200403",
    "200401",
    "200311",
    "200309",
    "200307",
    "200305",
    "200303",
    "200301",
    "200211",
    "200209",
    "200207",
    "200205",
    "200203",
    "200201",
    "200111",
    "200109",
    "200107",
    "200105",
    "200103",
    "200101",
    "200011",
    "200009",
    "200007",
    "200005",
    "200003",
    "200001",
    "199911",
    "199909",
    "199907",
    "199905",
    "199903",
    "199901",
    "199811",
    "199809",
    "199807",
    "199805",
    "199803",
    "199801",
    "199711",
    "199709",
    "199707",
    "199705",
    "199703",
    "199701",
    "199611",
    "199609",
    "199607",
    "199605",
    "199603",
    "199601",
    "199511",
    "199509",
    "199507",
    "199505",
    "199503",
    "199501",
    "199411",
    "199409",
    "199407",
    "199405",
    "199403",
    "199401",
    "199311",
    "199309",
    "199307",
    "199305",
    "199303",
    "199301",
    "199211",
    "199209",
    "199207",
    "199205",
    "199203",
    "199201",
    "199111",
    "199109",
    "199107",
    "199105",
    "199103",
    "199101",
    "199011",
    "199009",
    "199007",
    "199005",
    "199003",
    "199001",
    "198911",
    "198909",
    "198907",
    "198905",
    "198903",
    "198901",
    "198811",
    "198809",
    "198807",
    "198805",
    "198803",
    "198801",
    "198711",
    "198709",
    "198707",
    "198705",
    "198703",
    "198701",
    "198611",
    "198609",
    "198607",
    "198605",
    "198603",
    "198601",
    "198511",
    "198509",
    "198507",
    "198505",
    "198503",
    "198501",
    "198411",
    "198409",
    "198407",
    "198405",
    "198403",
    "198401",
    "198311",
    "198309",
    "198307",
    "198305",
    "198303",
    "198301",
    "198211",
    "198209",
    "198207",
    "198205",
    "198203",
    "198201",
    "198111",
    "198109",
    "198107",
    "198105",
    "198103",
    "198101",
    "198011",
    "198009",
    "198007",
    "198005",
    "198003",
    "198001",
    "197911",
    "197909",
    "197907",
    "197905",
    "197903",
    "197901",
    "197811",
    "197809",
    "197807",
    "197805",
    "197803",
    "197801",
    "197711",
    "197709",
    "197707",
    "197705",
    "197703",
    "197701",
    "197611",
    "197609",
    "197607",
    "197605",
    "197603",
    "197601",
    "197511",
    "197509",
    "197507",
    "197505",
    "197503",
    "197501",
    "197411",
    "197409",
    "197407",
    "197405",
    "197403",
    "197401",
    "197311",
    "197309",
    "197307",
    "197305",
    "197303",
    "197301",
    "197211",
    "197209",
    "197207",
    "197205",
    "197203",
    "197201",
    "197111",
    "197109",
    "197107",
    "197105",
    "197103",
    "197101",
    "197011",
    "197009",
    "197007",
    "197005",
    "197003",
    "197001",
    "196911",
    "196909",
    "196907",
    "196905",
    "196903",
    "196901",
    "196811",
    "196809",
    "196807",
    "196805",
    "196803",
    "196801",
    "196711",
    "196709",
    "196707",
    "196705",
    "196703",
    "196701",
    "196611",
    "196609",
    "196607",
    "196605",
    "196603",
    "196601",
    "196511",
    "196509",
    "196507",
    "196505",
    "196503",
    "196501",
    "196411",
    "196409",
    "196407",
    "196405",
    "196403",
    "196401",
    "196311",
    "196309",
    "196307",
    "196305",
    "196303",
    "196301",
    "196211",
    "196209",
    "196207",
    "196205",
    "196203",
    "196201",
    "196111",
    "196109",
    "196107",
    "196105",
    "196103",
    "196101",
    "196011",
    "196009",
    "196007",
    "196005",
    "196003",
    "196001",
    "195911",
    "195909",
    "195907",
    "195905",
    "195903",
    "195901",
    "195811",
    "195809",
    "195807",
    "195805",
    "195803",
    "195801",
  ];

  const tdRefs = useRef([]);
  tdRefs.current = [];

  // one fsHistories are loaded, update newRikishi
  useEffect(() => {
    if (fsHistories.length > 0) {
      setNewRikishi(fsHistories);
    }
  }, [fsHistories]);

  useEffect(() => {
    tdRefs.current.forEach((cell) => {
      if (cell && cell.innerHTML.trim() === "") {
        cell.classList.add("more-padding");
      }
    });
  }, [fsHistories]);

  // switch for the retired checkbox
  function handleRetired() {
    if (retiredState === true) {
      setNewRikishi(newRikishi.filter((r) => r.rikishi.retired === false));
      setRetiredState(!retiredState);
    } else if (retiredState === false) {
      setNewRikishi(filterBySearch(fsHistories));
      setRetiredState(!retiredState);
    }
  }

  // search functions
  function handleSearchOne(e) {
    setSearchOne(e.target.value);
  }
  function handleSearchTwo(e) {
    setSearchTwo(e.target.value);
  }

  const filterBySearch = useCallback(() => {
    return fsHistories.filter((history) => {
      if (searchOne !== "" && searchTwo !== "") {
        const one = history.rikishi.shikona
          .toLowerCase()
          .includes(searchOne.toLowerCase());
        const two = history.rikishi.shikona
          .toLowerCase()
          .includes(searchTwo.toLowerCase());
        // if both searches are in use, return a rikishi history that matches either search
        return one || two;  // Changed this line
      } else if (searchOne !== "") {
        return history.rikishi.shikona
          .toLowerCase()
          .includes(searchOne.toLowerCase());
      } else if (searchTwo !== "") {
        return history.rikishi.shikona
          .toLowerCase()
          .includes(searchTwo.toLowerCase());
      } else {
        return true;  // Changed: return true instead of returning history
      }
    });
  }, [searchOne, searchTwo, fsHistories]);

  // search functionality, running fsHistories through filterBySearch
  useEffect(() => {
    let result = fsHistories;
    result = filterBySearch(result);
    setNewRikishi(result);
  }, [fsHistories, searchOne, searchTwo, filterBySearch]);

  // fsHistories sort definitions
  const averageSort = useMemo(() => {
    return [...newRikishi].sort(
      (a, b) => b.avg_fantasy_sumo_score - a.avg_fantasy_sumo_score
    );
  }, [newRikishi]);

  const shikonaSort = useMemo(() => {
    return [...newRikishi].sort((a, b) =>
      a.rikishi.shikona.localeCompare(b.rikishi.shikona)
    );
  }, [newRikishi]);

  const totalSort = useMemo(() => {
    return [...newRikishi].sort((a, b) => b.total_points - a.total_points);
  }, [newRikishi]);

  const xSort = useCallback(
    (x) => {
      return [...newRikishi].sort((a, b) => (b[x] || 0) - (a[x] || 0));
    },
    [newRikishi]
  );

  // adding and removing classes to highlight a clicked column header
  function setHighlight(target) {
    if (fsHistories.length > 0) {
      const columns = document.querySelectorAll(".highlight");
      columns.forEach((col) => {
        if (col.classList.contains("DBStatsActive")) {
          col.classList.remove("DBStatsActive");
        }
      });
      target.classList.add("DBStatsActive");
    }
  }

  function handleViewState(e) {
    setViewState(e.target.id);
    const target = document.getElementById(`${e.target.id}`);
    setHighlight(target);
  }

  // returns fsHistories sorted in a certain way, based on value of viewState
  const FSRikishiSwitch = useMemo(() => {
    switch (viewState) {
      case "default": {
        return AllHistories(averageSort);
      }
      case "average": {
        return AllHistories(averageSort);
      }
      case "shikona": {
        return AllHistories(shikonaSort);
      }
      case "total": {
        return AllHistories(totalSort);
      }
      default: {
        return AllHistories(xSort(viewState));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewState, averageSort, shikonaSort, totalSort, xSort]);

  function openRikishiInfo(targetRikishi) {
    const rikishi = targetRikishi[0];

    const allScores = Object.entries(targetRikishi[1])
      .filter((el) => el[0].includes("b"))
      .filter((el) => el[1] !== null);

    let bestScore = ["", 0];

    for (let i = 0; i < allScores.length; i++) {
      if (allScores[i][1] > bestScore[1]) bestScore = allScores[i];
    }

    const pastSix = allScores
      .filter((score) => score[1] !== null)
      .reverse()
      .slice(0, 6);

    function calculate_age(dob) {
      const birthdate = new Date(dob);
      const diff_ms = Date.now() - birthdate.getTime();
      const age_dt = new Date(diff_ms);

      return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    return (
      <dialog id="rikishi-info-dialog">
        <button
          id="rikishi-info-close"
          onClick={() => {
            setRikishiInfoOpen(false);
            setTargetRikishi(null);
          }}
        >
          X
        </button>
        <div className="rikishi-info-content">
          <div className="rikishi-info-title">
            <img
              id="rikishi-info-image"
              src={rikishi.image_url}
              alt={rikishi.shikona}
            ></img>
            <h1>{rikishi.shikona}</h1>
            <p>{rikishi.retired === true ? "retired" : ""}</p>
          </div>
          <div id="rikishi-info-text">
            <p>
              Age: {calculate_age(rikishi.birthdate)} --- {rikishi.heya} stable
            </p>
            <p>
              Height: {rikishi.height} cm --- Weight: {rikishi.weight} kg
            </p>
            <p>
              current rank: {rikishi.current_rank} --- highest rank:{" "}
              {rikishi.highest_rank}
            </p>
            <p>
              Yusho: {rikishi.yusho} --- Kinboshi: {rikishi.kinboshi}
            </p>
            <p>
              Gino-sho: {rikishi.gino_sho} --- Shukun-sho: {rikishi.shukun_sho}{" "}
              --- Kanto-sho: {rikishi.kanto_sho}
            </p>
            <hr style={{ width: "200px", margin: "10px auto" }} />
            <p></p>
            <p>
              Average Fantasy Sumo Points:{" "}
              {targetRikishi[1].avg_fantasy_sumo_score}
            </p>
            <p>
              Best Fantasy Sumo performance: {bestScore[1]} (
              {bestScore[0].slice(1)})
            </p>
            <p>Recent Fantasy Sumo History:</p>
            <div id="rikishi-fs-recent">
              {pastSix.map((el) => {
                let basho = el[0].slice(1)
                return (
                <p>
                  {basho.substring(0, 4)}.{basho.substring(4, 6)} : {el[1]}
                </p>
                )
              })}
            </div>
            <p></p>
          </div>
        </div>
      </dialog>
    );
  }

  function handleRikishiOpenClick(history) {
    const targetRikishi = rikishi.filter(
      (rik) => rik.shikona === history.rikishi.shikona
    );
    setTargetRikishi([targetRikishi[0], history]);
    setRikishiInfoOpen(true);
  }

  // shows the score values for each fsHistory
  function displayOneRikishi(history) {
    const justTheHistoryEntries = Object.fromEntries(
      Object.entries(history).filter(([key]) => key.includes("b"))
    );

    return bashosArray.map((basho, index) => {
      let score = "";
      let target = justTheHistoryEntries[`b${basho}`];
      if (target) score = target;
      return (
        <td
          ref={(el) => (tdRefs.current[index] = el)}
          className="dbtest-one-score"
        >
          {score}
        </td>
      );
    });
  }

  // shows all fsHistories, with sections for info & total & average, then all the individual scores
  function AllHistories(sorted) {
    return sorted.map((history) => {
      let image = history.rikishi.image_url;
      // if there's no image_url definted, use a placeholder image
      if (image.charAt(0) !== "h")
        image =
          "https://sumo.or.jp/img/sumo_data/rikishi/60x60/kanto_no_image.jpg";

      return (
        <div className="dbtest-one-rikishi">
          <th className="dbtest-one-rikishi-header">
            <img
              className="dbtest-rikishi-image"
              src={image}
              alt={"picture of" + history.rikishi.shikona}
              loading="lazy"
            ></img>
            <h4
              onClick={() => handleRikishiOpenClick(history)}
              className="dbtest-rikishi-name dbtest-rikishi-link-hover"
            >
              {history.rikishi.shikona}
            </h4>
            <p className="dbtest-rikishi-total">{history.total_points}</p>
            <p className="dbtest-rikishi-avg">
              {history.avg_fantasy_sumo_score}
            </p>
          </th>
          <div className="dbtest-one-rikishi-scores">
            {displayOneRikishi(history)}
          </div>
        </div>
      );
    });
  }

  // Rendering the basho rows
  function AllBashoRows() {
    return bashosArray.map((x) => {
      const formatted = `${x.substring(0, 4)}.${x.substring(4, 6)}`;
      return (
        <th
          key={formatted}
          id={`b${x}`}
          className="dbtest-basho highlight"
          onClick={handleViewState}
        >
          {formatted}
        </th>
      );
    });
  }

  // defined so that mobile users see the 'sorry' message
  const mobileScreen = window.matchMedia("(max-width: 600px)");

  return viewState === "loading" ? (
    // do something like usersCleanup in userRankings to add a bunch of k/v pairs for each rikishi Object,
    // so that it doesn't have to recalculate and format everything with each sort and re-render
    <main>
      <h2 style={{ textAlign: "center", margin: "40px auto" }}>loading...</h2>
    </main>
  ) : (
    <main>
      {mobileScreen.matches ? (
        <p id="sorry">sorry, this database looks a lot better on a computer!</p>
      ) : (
        ""
      )}
      <div id="dbtest-all-filters">
        <div id="dbtest-filters">
          <div>
            <input
              placeholder="Asashoryu"
              onChange={handleSearchOne}
              value={searchOne}
              type="text"
              name="search"
            ></input>
            <label>rikishi search</label>
          </div>
          <div>
            <input
              placeholder="Kakuryu"
              onChange={handleSearchTwo}
              value={searchTwo}
              type="text"
              name="search"
            ></input>
            <label>rikishi search</label>
          </div>
        </div>
        <div id="retired-checkbox">
          <input
            type="checkbox"
            id="retiredCheckbox"
            name="retired-checkbox"
            value={retiredState}
            onClick={handleRetired}
          ></input>
          <label htmlFor="retiredCheckbox">Hide Retired Rikishi</label>
        </div>
      </div>
      <table id="dbtest-full-table">
        <thead id="dbtest-basho-row">
          <div id="dbtest-basho-sticky">
            <th
              className="dbtest-basho-image highlight"
              id="default"
              onClick={handleViewState}
            >
              reset
            </th>
            <th
              className="dbtest-rikishi-name highlight"
              id="shikona"
              onClick={handleViewState}
            >
              shikona
            </th>
            <th
              className="dbtest-basho-total highlight"
              id="total"
              onClick={handleViewState}
            >
              total FS points
            </th>
            <th
              className="dbtest-basho-avg highlight"
              id="average"
              onClick={handleViewState}
            >
              average score
            </th>
          </div>
          {AllBashoRows()}
        </thead>
        <tbody id="dbtest-all-histories">{FSRikishiSwitch}</tbody>
      </table>
      {rikishiInfoOpen === true ? openRikishiInfo(targetRikishi) : ""}
    </main>
  );
}

export default NewFSDatabase;
