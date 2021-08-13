import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import "./app.css";
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
function App() {
  return (
   
      <Router>
      <Topbar/>
    <div className="container">
      <Sidebar/>
      <Switch>
        <Route exact path="/">
        <Home/>  
        </Route>
        <Route path="/users">
        <UserList/>  
        </Route>
      </Switch> 
    </div>
    </Router>
  );
}

export default App;
