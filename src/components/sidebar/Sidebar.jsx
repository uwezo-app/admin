import "./sidebar.css";
import { Home, Timeline, PermIdentity } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <Link to="/users" className="link">
              <li className="sideBarListItem">
                <PermIdentity className="sideBarIcon" />
                Psychologists
              </li>
            </Link>
            <li className="sideBarListItem">
              <PermIdentity className="sideBarIcon" />
              Patients
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
