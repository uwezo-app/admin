import "./app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import PatientList from "./pages/patientList/PatientList";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

import AuthProvider from "./context/auth/provider";

function App() {
	const LoginContainer = () => (
		<div className="container">
			<Route path="/" component={Login}></Route>
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
				<Route path="/newUser">
					<NewUser />
				</Route>
			</div>
		</div>
	);

	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route exact path="/" component={LoginContainer} />

					<Route component={DefaultContainer} />
				</Switch>
			</Router>
		</AuthProvider>
	);
}
export default App;
