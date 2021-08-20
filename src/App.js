import "./app.css";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import PatientList from "./pages/patientList/PatientList";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import NewUser from "./pages/newUser/NewUser";
function App(){
  const LoginContainer = () => (
    <div className="container">
      <Route path="/" component={Login} >
        </Route>
    </div>
  );
  const DefaultContainer = () => (

    <div>  
        <Topbar />
        <div className="container">
          <Sidebar />        
          <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/users/psychologists">
              <UserList url="http://localhost:8000/psychologists" />
            </Route>
            <Route path="/users/patients">
              <PatientList url="http://localhost:8000/patients" />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route  path="/newUser">
              <NewUser />
            </Route>
        </div>
        </div>  
  
  );
return(
<Router>
  <Switch>
 
    <Route exact path="/" component={LoginContainer}/>
    
    <Route component={DefaultContainer}/>

 
  </Switch>
</Router>
);
}
export default App;


