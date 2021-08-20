import React from 'react'
import "./topbar.css"
import {NotificationsNone, ExitToApp} from '@material-ui/icons'
import { useHistory } from "react-router";

export default function Topbar() {
    const history=useHistory();
    const handleClick=()=>{
        history.push('/');
      
    }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                <span className="logo">Uwezo Admin</span>
                </div>
                <div className="topRight">
              
                   
                    <div className ="topbarIconContainer" onClick={handleClick}>
                  
                    <ExitToApp/>
                    </div>
                </div>
            </div>
        </div>
    )
}
