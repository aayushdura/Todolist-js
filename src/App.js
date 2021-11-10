import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todolists from "./pages/Todolists";
import Infointake from "./components/Infointake";
import { useState } from "react";

const App = () => {
  const [userInfo, setUserInfo] = useState({});
  const handleSubmit = (info) => {
    setUserInfo(info);
  };
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Infointake handleSubmit={handleSubmit} />
          </Route>
          <Route path="/List" exact>
            <Todolists userInfo={userInfo} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
