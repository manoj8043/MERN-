import React from 'react';
import './App.css';

function App() {
  let MumbaiIndians = ["Rohit Sharma", "Jasprit Bumrah", "Kieron Pollard", "Hardik Pandya", "Ishan Kishan"];
  let ChennaiSuperKings = ["MS Dhoni", "Ravindra Jadeja", "Moeen Ali", "Ruturaj Gaikwad", "Deepak Chahar"];
  let RoyalChallengersBangalore = ["Virat Kohli", "AB de Villiers", "Glenn Maxwell", "Devdutt Padikkal", "Mohammad Siraj"];
  let DelhiCapitals = ["Shreyas Iyer", "Rishabh Pant", "Prithvi Shaw", "Kagiso Rabada", "Shimron Hetmyer"];
  let KolkataKnightRiders = ["Shubman Gill", "Andre Russell", "Dinesh Karthik", "Sunil Narine", "Nitish Rana"];

  let IplTeams = [MumbaiIndians, ChennaiSuperKings, RoyalChallengersBangalore, DelhiCapitals, KolkataKnightRiders];
  let TeamNames = ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore", "Delhi Capitals", "Kolkata Knight Riders"];

  const displayPlayers = (team: string[]) => {
    return team.join(', ');
  };

  return (
    <div className="app-container">
      <h2 className="title">IPL Teams and Players</h2>
      <h3 className="sub-title">List of Teams and Players:</h3>

      {IplTeams.map((team, index) => (
        <div className="team-container" key={index}>
          <h4 className="team-name">{TeamNames[index]}</h4>
          <p className="players-list">Players: {displayPlayers(team)}</p>
        </div>
      ))}

      <div className="button-container">
        <button className="action-button" onClick={() => {
          IplTeams.forEach((team, index) => {
            console.log(`${TeamNames[index]}: ${displayPlayers(team)}`);
          });
        }}>
          Display All IPL Teams and Players
        </button>

        <button className="action-button" onClick={() => {
          console.log(`Total IPL Teams: ${IplTeams.length}`);
        }}>
          Show Total IPL Teams
        </button>

        <button className="action-button" onClick={() => {
          let mumbaiPlayers = MumbaiIndians;
          console.log(`Mumbai Indians Players: ${displayPlayers(mumbaiPlayers)}`);
        }}>
          Display Mumbai Indians Players
        </button>

        <button className="action-button" onClick={() => {
          ChennaiSuperKings.push("Robin Uthappa");
          console.log("Updated Chennai Super Kings Players: ", displayPlayers(ChennaiSuperKings));
        }}>
          Add Player to Chennai Super Kings
        </button>

        <button className="action-button" onClick={() => {
          KolkataKnightRiders.pop();
          console.log("Updated Kolkata Knight Riders Players: ", displayPlayers(KolkataKnightRiders));
        }}>
          Remove Last Player from KKR
        </button>

        <button className="action-button" onClick={() => {
          RoyalChallengersBangalore.unshift("Kyle Jamieson");
          console.log("Updated RCB Players: ", displayPlayers(RoyalChallengersBangalore));
        }}>
          Add Player to RCB
        </button>

        <button className="action-button" onClick={() => {
          DelhiCapitals.shift();
          console.log("Updated Delhi Capitals Players: ", displayPlayers(DelhiCapitals));
        }}>
          Remove First Player from DC
        </button>

        <button className="action-button" onClick={() => {
          KolkataKnightRiders.splice(1, 2, "Shakib Al Hasan", "Lockie Ferguson");
          console.log("Updated Kolkata Knight Riders Players: ", displayPlayers(KolkataKnightRiders));
        }}>
          Replace Players in KKR
        </button>

        <button className="action-button" onClick={() => {
          let allTeamsCombined = MumbaiIndians.concat(ChennaiSuperKings, RoyalChallengersBangalore, DelhiCapitals, KolkataKnightRiders);
          console.log("All IPL Players Combined: ", allTeamsCombined);
        }}>
          Combine All IPL Players
        </button>
      </div>
    </div>
  );
}

export default App;
