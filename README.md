# README

some things you'll probably need to do to use this on your local:
bundle install
npm install
npm install --prefix client
rails db stuff - migrate, seed, etc.
(let me know if there's anything else you had to do?)

then you can run:
rails s - to start the server
npm start --prefix client - to start the node client

start from localhost:4000

## Repo:

https://github.com/mason-lynass/fs-23

## Project Pitch

I'm building a Fantasy Sumo website! If you know anything about Fantasy sports in general, the structure of the game should seem familiar. I've been running Fantasy Sumo leagues off and on since 2019 - I have my own slightly unusual scoring system, and I already have a bunch of data assembled on a spreadsheet you can view here: https://docs.google.com/spreadsheets/d/1st17fp_hqAeO4KYyuinbZ23GKFU0kB4eBsdrMSJ7ngE/edit#gid=0 .

A little bit about sumo:
Sumo tournaments happen every two months (odd numbered months) for 15 days. There are 70 paid, professional sumo wrestlers (*rikishi*), competing in two divisions: *Makuuchi*, the top division, and *Juryo*, the second division. Each rikishi in these divisions has one match for each of the 15 tournament days.

Without getting into too many of the game rules or the formalities of professional sumo... the goal of the game is to assemble a team of rikishi that will perform the best over the 15 day tournament. This game is set up closer to a Daily or Pick 'em style game - users keep the same team for all 15 days, and many users can pick the same rikishi, instead of the traditional Fantasy set up where users are grouped into leagues, only one team can pick a player, and users are free to switch players at will.

I'm collaborating with a friend of mine who is helping me put together a SumoAPI - a stand-alone API anyone will be able to use to access information about specific wrestlers or tournaments. In the mean time, or in the event that SumoAPI takes a while to set up, I have seed data ready to go!


## User Stories

Users will be able to:
- Login (required to pick a team!)
- View a page detailing the rules and scoring for this particular game (ideally before drafting...)
- Use a team drafting page to browse rikishi, add them to their team, and submit the page to POST their team to the database.
- Browse a page containing data about all rikishi
- Browse pages containing data for each rikishi
- View a page listing all of the user-submitted teams, their rikishi, and active scores.
- View an "Account" page displaying their current team, and maybe their Fantasy Sumo history? like how they've done in past tournaments?

## Database tables

Rikishi
- name
- current_rank
- highest_rank
- height (cm)
- weight (kg)
- *Yusho* (tournament victories)
- *Sansho* Special Prizes (awarded by a panel, sort of arbitrary, but there are 3 of them)
- *Kinboshi* (wins against the highest ranked rikishi, Yokozuna)
- Fantasy Sumo history - a record of their point totals going back at least two years
(I might add attributes like birthdate, stable, etc. which are not relevant to the scoring of the game, but nice to see for informational purposes)

User
- name
- password (strong)
- Fantasy Sumo history - a record of their team's point totals going back at least two years (maybe even like percentile or rankings?)

Teams (join table of User & Rikishi)
- user_id
- rikishi_id for each rikishi on the team

## Wireframes

![landing page](wireframes-for-readme/Screen%20Shot%202022-12-12%20at%202.24.48%20PM.png)
![rules / scoring](wireframes-for-readme/Screen%20Shot%202022-12-12%20at%202.28.23%20PM.png)
![pick your team](wireframes-for-readme/Screen%20Shot%202022-12-12%20at%202.37.30%20PM.png)
![all teams / results](wireframes-for-readme/Screen%20Shot%202022-12-12%20at%202.45.04%20PM.png)
![account page](wireframes-for-readme/Screen%20Shot%202022-12-12%20at%202.48.14%20PM.png)
