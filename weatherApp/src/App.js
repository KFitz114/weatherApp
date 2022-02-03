import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Weather from './Components/weather.js';
import Forecast from './Components/Forecast.js';
import Home from './Components/home';

function App() {
  return (
    <div id = "app">
      <Forecast />
    </div>
    // <Router>
    //   <div id="app">
    //     <div className="links">
    //       <Link className="link" to = '/'> Home </Link>
    //       <Link className="link" to = '/forecast'> Weather  </Link>
    //       <Link className= "link" to = '/weather'> Forecast </Link>
    //     </div>
    //     <div>
    //       <Switch>
    //         <Route exact path ='/'> <Home /> </Route>
    //         <Route path ='/forecast'> <Forecast /> </Route>
    //         <Route path ='/weather'> <Weather /> </Route>
    //       </Switch>
    //     </div>  
    //   </div>
    // </Router>
  );
}


export default App;
