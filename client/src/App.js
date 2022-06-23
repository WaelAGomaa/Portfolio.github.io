import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Skill">
          <Skill />
        </Route>
        <Route path="/About">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
