import "./widgetsSm.css";

import React from "react";
import { Link } from "react-router-dom";

import { Visibility } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";

export default function WidgetSm() {
  const [psychologists, setPsychologists] = React.useState([]);

  React.useEffect(() => {
    const func = async () => {
      let response = await fetch(
        `https://uwezo-app-323117.uc.r.appspot.com/psychologists?order_by=created_at`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok && response.status === 200) {
        const res = await response.json();
        setPsychologists(res);
      }
    };

    func();
  }, []);

  const defaultImage =
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg";

  return (
    <div className="widgetsSm">
      <span className="widgetsSmTitle">New Psychologists</span>
      <ul className="widgetsSmList">
        {!psychologists ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!psychologists && (
              <CircularProgress style={{ color: green[500] }} />
            )}
          </div>
        ) : (
          psychologists.map((psychologist, index) => (
            <li className="widgetsSmListItem" id={index}>
              <img
                src={psychologist.Profile.Image || defaultImage}
                alt="Psychologist Profile"
                className="widgetsSmImg"
              />
              <div className="widgetsSmUser">
                <span className="widgetsSmUsername">
                  {psychologist.FirstName + " " + psychologist.LastName}
                </span>
              </div>
              <div className="widgetsSmUser">
                <span className="widgetsSmUserCategory">Psychologist</span>
              </div>
              <Link to={`/user/${psychologist.Email}`}>
                <button className="widgetsSmButton">
                  <Visibility className="widgetSmIcon" /> Display
                </button>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
