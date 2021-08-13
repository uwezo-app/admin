import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                <span className="logo">Uwezo Admin</span>
                </div>
                <div className="topRight">
                    <div className ="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
    
                    <img src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
