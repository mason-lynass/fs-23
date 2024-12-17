# Fantasy Sumo

Fantasy Sumo is a Fantasy sports game following the action of professional Ozumo, where users build their own team of sumo wrestlers & compete against other users to score the most Fantasy Sumo points. Explore a comprehensive database of real world & game-specific statistics, track your Fantasy Sumo history, and learn sumo terminology.

https://www.fantasysumo.net

## Features

- a table of user-drafted teams for the current (or most recent) tournament, sorted from most -> fewest points; points updated daily by a cron task
- a page where users can draft their teams before the upcoming tournament
- a comprehensive database table of professional sumo wrestlers, their physical characteristics, stable association, and prize history, for all wrestlers who have competed in the top divison since 1958. Users can sort by any column in the database table
- an additional database table of scores for my Fantasy Sumo game for each wrestler, for every tournament since 1958 - users can sort by total FS points, average FS points per basho, or by any individual tournament
- an Account page for users to view their current team score, as well as their results from previous tournaments
- an About page and a Terminology page to inform site users about Ozumo terminology and the rules of my specific game

## Tech Stack

a non-exhaustive list of technologies used in this project:

React

React Router

useSound

Ruby on Rails

PostgreSQL

BCrypt

Puma

CSS

a web service, database, and cron job deployed through Render

## Repo:

https://github.com/mason-lynass/fs-23

### To start locally:

`npm run --prefix client`

`rails s (on port 4000)`
