import { Redirect, Route, Switch } from "react-router-dom";

import './App.css';
import {Calculator, CV, MoviesPage, TestPage} from "./containers";

function App() {
  return (
      <div>

        <Switch>
          <Redirect exact from="/" to="/movies?page=1"/>
          {/*<Redirect exact from="/movies" to="/movies?page=1"/>*/}
          <Route path="/movies" component={MoviesPage}/>
          <Route path="/myCV" component={CV}/>
          <Route path="/test" component={TestPage}/>
          <Route path="/calculator" component={Calculator}/>
        </Switch>

      </div>
  );
}

export default App;
