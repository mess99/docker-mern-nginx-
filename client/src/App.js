import logo from './logo.svg';
import nodelogo from './nodejs.svg';
import nginxlogo from './nginx.svg';
import mongologo from './mongo.svg';
import dockerlogo from './docker.svg';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo-react" alt="logo" />
        <img src={nodelogo} className="App-logo-node" alt="logo" />
        <img src={nginxlogo} className="App-logo-nginx" alt="logo" />
        <img src={mongologo} className="App-logo-mongo" alt="logo" />
        <img src={dockerlogo} className="App-logo-docker" alt="logo" />
        <p>
          Docker : React - NodeJS - MongoDB - MongoDashboard (port 8081) - Nginx
        </p>
      </header>
    </div>
  );
}

export default App;
