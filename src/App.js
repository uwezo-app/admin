import "./app.css";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users/psychologists">
            <UserList url="http://localhost:8000/psychologists" />
          </Route>
          <Route exact path="/users/patients">
            <UserList url="http://localhost:8000/patients" />
          </Route>
          <Route exact path="/user/:userId">
            <User />
          </Route>
          <Route exact path="/newUser">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
