import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"
export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Total Users</span>
                <div className="featuredUserContainer">
                    <span className="featuredUser">4,640</span>
                    <span className="featuredUserRate">-11.4 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                   <span className="featuredSub">Compared to Last Month</span>

            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Psychologists</span>
                <div className="featuredUserContainer">
                    <span className="featuredUser">2,415</span>
                    <span className="featuredUserRate">-1.4 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                   <span className="featuredSub">Compared to Last Month</span>

            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Patients</span>
                <div className="featuredUserContainer">
                    <span className="featuredUser">2,225</span>
                    <span className="featuredUserRate">+2.4 <ArrowUpward className="featuredIcon"/></span>
                </div>
                   <span className="featuredSub">Compared to Last Month</span>

            </div>

            
        </div>
    )
}
