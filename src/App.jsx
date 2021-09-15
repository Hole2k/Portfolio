import "./app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main/Main";
import Html from "./pages/html/Html";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
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
        </Switch>
      </Router>

    </div>
  );
}

export default App;
