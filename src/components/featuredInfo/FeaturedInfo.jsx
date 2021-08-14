import "./featuredInfo.css";
import React from "react";

export default function FeaturedInfo() {
  const [psychologists, setPsychologists] = React.useState(0);
  const [patients, setPatients] = React.useState(0);

  React.useEffect(() => {
    const func = async () => {
      let response = await fetch("http://localhost:8000/psychologists/number", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok && response.status === 200) {
        const res = await response.text();
        setPsychologists(Number(res));
      }

      response = fetch("http://localhost:8000/patients/number", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok && response.status === 200) {
        const res = await response.text();
        setPatients(Number(res));
      }
    };

    func();
  }, [psychologists, patients]);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Users</span>
        <div className="featuredUserContainer">
          <span className="featuredUser">{patients + psychologists}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Psychologists</span>
        <div className="featuredUserContainer">
          <span className="featuredUser">{psychologists}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Patients</span>
        <div className="featuredUserContainer">
          <span className="featuredUser">{patients}</span>
        </div>
      </div>
    </div>
  );
}
