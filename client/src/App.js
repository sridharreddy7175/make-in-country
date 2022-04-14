import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './modules/layout/Home';
import Navbar from './modules/layout/Navbar';
import About from './modules/layout/About';
import Signup from './modules/users/Signup';
import Signin from './modules/users/Signin';
import Apps from './modules/apps/Apps';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/apps">
            <Apps />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
