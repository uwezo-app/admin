import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetsSm from "../../components/widgetsSm/WidgetsSm";
import WidgetsLg from "../../components/widgetsLg/WidgetsLg";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
            <div className="homeWidget">
                <WidgetsSm/>
                <WidgetsLg/>
            </div>

        </div>
    )
}
