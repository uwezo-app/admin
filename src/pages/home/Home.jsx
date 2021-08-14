import "./home.css";

import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetsSm from "../../components/widgetsSm/WidgetsSm";
// import WidgetsLg from "../../components/widgetsLg/WidgetsLg";

export default function Home() {
  const [psychologists, setPsychologists] = React.useState([]);

  React.useEffect(() => {
    // activce users
    const func = async () => {
      let response = await fetch("http://localhost:8000/psychologists", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok && response.status === 200) {
        const res = await response.json();
        setPsychologists(res.Psychologists);
      }
    };

    func();
  }, [psychologists]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active Users"
      />
      <div className="homeWidget">
        <WidgetsSm />
        {/* <WidgetsLg /> */}
      </div>
    </div>
  );
}
