import "./app.scss";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from "./pages/main/Main";
import Html from "./pages/html/Html";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Error from './pages/error/Error';
import Css from "./pages/css/Css";
import Js from "./pages/js/Js";
import php from "./pages/php/php";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Html" component={Html} />
          <Route exact path="/Css" component={Css} />
          <Route exact path="/Js" component={Js} />
          <Route exact path="/php" component={php} />

          <Route exact path="/Error" component={Error} />
          <Redirect to="/Error" />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
