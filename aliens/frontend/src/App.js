import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RegisterView from "./views/RegisterView/index";
import UserPageView from "./views/userPageView/index"
import ExcursionsView from "./views/ExcursionsView/index";
import ExperimentsView from "./views/ExperimentsView/index";
import EnemiesView from "./views/EnemiesView/index";
import SpaceshipsView from "./views/SpaceshipsView/index";
import Header from "./modules/Basic/components/Header/index";
import {getHuman} from "./services/human"
import {useState, useEffect} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [userId, setUserId] = useState(1); // later chagen to login/ logout

  return (
    <>
    <Header></Header>
    <Router>
      <Switch>
        <Route path="/register">
          <RegisterView>
          </RegisterView>
        </Route>
        <Route path="/users">
          <UserPageView></UserPageView>
        </Route>
        <Route path="/experiments">
            <ExperimentsView></ExperimentsView>
        </Route>
        <Route path="/excursions">
            <ExcursionsView></ExcursionsView>
        </Route>
        <Route path="/enemies">
            <EnemiesView></EnemiesView>
        </Route>
        <Route path="/spaceships">
          <SpaceshipsView></SpaceshipsView>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
