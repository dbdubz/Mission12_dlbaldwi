import React from 'react';
import './App.css';
import logo from './ncaa-basketball-logo-png-transparent.png';
import teams_json from './CollegeBasketballTeams.json';

const teams = teams_json["teams"];

//Team card
class Team extends React.Component<{school: string, name: string, city: string, state: string}> {
  render() {
    const team = this.props
    return (
      <div>
        <div className='Card'>
          <h2>{team.school} {team.name}</h2>
          <h2>{team.city}, {team.state}</h2>
        </div>
      </div>
    );
  }
}

//Header describing the website (component 1)
function Header() {
  return (
    <div>
      <h1>NCAA Basketball Teams</h1>
      <h4>This page highlights all of the teams in college basketball</h4>
    </div>
  );
}

//Logo (component 2)
function Logo() {
  return(
    <div>
      <img src={logo} alt='logo' title='logo' height={150}></img>
    </div>
  )
}

//Map teams to Team (component 3)
function Teams() {
return (
  <div>
    {teams.map(team => <Team {...team}/>)}
  </div>
);
}
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Header/>
        <Logo/>
      </header>

      <Teams/>
    </div>
  );
}

export default App;