import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddFlag from "./AddFlag";
import Home from "./Home";
import Navbar from "./Navbar";
import Search from "./Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/add">
              <AddFlag />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
