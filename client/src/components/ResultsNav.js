function ResultsNav ({changeViewState, viewState}) {

    return (
        <div id='resultsNav'>
            <button onClick={changeViewState('teams')}>Team Results</button>
            <button onClick={changeViewState('rikishi')}>Rikishi Results</button>
        </div>
    )
}

export default ResultsNav