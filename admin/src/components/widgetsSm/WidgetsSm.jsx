import "./widgetsSm.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetSm(){
    return(
        <div className="widgetsSm">
            <span className="widgetsSmTitle">New Users</span>
            <ul className="widgetsSmList">
                <li className="widgetsSmListItem">
                    <img src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg" alt="" className="widgetsSmImg" />
                    <div className="widgetsSmUser">
                        <span className="widgetsSmUsername">Lukas</span>
                        <span className="widgetsSmUserCategory">Psychologist</span>
                    </div>
                    <button className="widgetsSmButton">
                         <Visibility className="widgetSmIcon"/>
                         Display
                    </button>
                </li>
                <li className="widgetsSmListItem">
                    <img src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg" alt="" className="widgetsSmImg" />
                    <div className="widgetsSmUser">
                        <span className="widgetsSmUsername">Lukas</span>
                        <span className="widgetsSmUserCategory">Psychologist</span>
                    </div>
                    <button className="widgetsSmButton">
                         <Visibility className="widgetSmIcon"/>
                         Display
                    </button>
                </li> <li className="widgetsSmListItem">
                    <img src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg" alt="" className="widgetsSmImg" />
                    <div className="widgetsSmUser">
                        <span className="widgetsSmUsername">Lukas</span>
                        <span className="widgetsSmUserCategory">Psychologist</span>
                    </div>
                    <button className="widgetsSmButton">
                         <Visibility className="widgetSmIcon"/>
                         Display
                    </button>
                </li> <li className="widgetsSmListItem">
                    <img src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg" alt="" className="widgetsSmImg" />
                    <div className="widgetsSmUser">
                        <span className="widgetsSmUsername">Lukas</span>
                        <span className="widgetsSmUserCategory">Psychologist</span>
                    </div>
                    <button className="widgetsSmButton">
                         <Visibility className="widgetSmIcon"/>
                         Display
                    </button>
                </li> <li className="widgetsSmListItem">
                    <img src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg" alt="" className="widgetsSmImg" />
                    <div className="widgetsSmUser">
                        <span className="widgetsSmUsername">Lukas</span>
                        <span className="widgetsSmUserCategory">Psychologist</span>
                    </div>
                    <button className="widgetsSmButton">
                         <Visibility className="widgetSmIcon"/>
                         Display
                    </button>
                </li>
            </ul>
        </div>
    )
}