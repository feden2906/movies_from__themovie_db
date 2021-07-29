import { Redirect, Route, Switch } from "react-router-dom";

import './App.css';
import { Footer, Header } from "./components";
import { MoviesPage } from "./containers";

function App() {
  return (
      <div>
        <Header/>

        <Switch>
          <Redirect exact from="/" to="/movies?page=1"/>
          {/*<Redirect exact from="/movies" to="/movies?page=1"/>*/}
          <Route path="/movies" component={MoviesPage}/>
        </Switch>

        <Footer/>
      </div>
  );
}

export default App;
