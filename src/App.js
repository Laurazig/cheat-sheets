import server1 from "./assets/server1.jpg";
import server2 from "./assets/server2.jpg";
import server3 from "./assets/server3.jpg";
import fullstack from "./assets/fullstackTerminal.jpg";
import dependencies from "./assets/dependancies.jpg";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">





      </header>
      <body>
        <h1>Laura’s guide to coding</h1>
        <p>Here you can find step-by-step guides on how to set up websites.
          ‘Why do we need more websites on how to code’ you may be asking.  </p>

        <p> I have been making cheatsheets for myself and keeping all this info online would make it easy for me to access it. When helping other students, I could efficiently share my knowledge. </p>
        <h2>Backend </h2>
        <h3>Servers</h3>
        <h4>First easiest server</h4>
        <img  src={server1} alt="" />
        <p>run npm i to get the package.json adn node modules</p>
        <h4> second server </h4>
        <img  src={server2} alt="" />
        <h4>Third server</h4>
        <img  src={server3} alt="" />

        <h2>Setting up a fullstack app</h2>
<p>in home folder create BE & FE folders. Split terminal: Cd backend & FE
package.json in top folder: npm init -y (Heroku)</p>
<img  src={fullstack} alt="" />
<p>install any dependancies you will need by running npn i and the neame in list</p>
<img  src={dependencies} alt="" />


      </body>
    </div>
  );
}

export default App;
