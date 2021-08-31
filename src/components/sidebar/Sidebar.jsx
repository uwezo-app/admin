import "./sidebar.css";
import { Home, PermIdentity } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem active">
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/users/psychologists" className="link">
              <li className="sideBarListItem">
                <PermIdentity className="sideBarIcon" />
                Psychologists
              </li>
            </Link>
            <Link to="/users/patients" className="link">
              <li className="sideBarListItem">
                <PermIdentity className="sideBarIcon" />
                Patients
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
