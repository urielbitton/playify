import React, {useState,useContext, useEffect} from 'react'
import MainContext from './MainContext'

function Sidebar() {
 
    const [teamName, setTeamName] = useContext(MainContext)
 
    return ( 
        <div className="sidebar">
            <div className="sideinfo">
                <img src={require('../images/chicago.png')} />
                <h4>{teamName}</h4> 
                <h6>Level: 1</h6>
                <h6>XP: 1</h6>
                <br/><br/>
                <small><i className="fas fa-running"></i><span>22</span>Players</small>
                <small><i className="fas fa-users"></i><span>398</span>Points</small>
            </div>
            <div className="sidemenu">
                <div className="menubtn" re-router="dashboard">
                    <i className="fas fa-tachometer-alt"></i>
                    <h4>Dashboard</h4> 
                </div>
                <div className="menubtn" re-router="myteam">
                    <i className="fas fa-users"></i>
                    <h4>My Team</h4>
                </div>
                <div className="menubtn" re-router="playnow">
                    <i className="fas fa-hockey-puck"></i>
                    <h4>My Games</h4>
                </div>
                <div className="menubtn" re-router="players">
                    <i className="fas fa-skating"></i>
                    <h4>Players</h4>
                </div>
                <div className="menubtn" re-router="profile">
                    <i className="fas fa-user-alt"></i>
                    <h4>Profile</h4>
                </div>
                <div className="menubtn" re-router="settings">
                    <i className="fas fa-cog"></i>
                    <h4>Settings</h4>
                </div>
            </div>
            <div className="sidefoot">
                <div className="spacer"></div>
                <p>Hockey Playify 2020.</p>
                <small>All Rights Reserved &copy;</small>
                <div className="spacer"></div>
            </div>

        </div>
    )
}

export default Sidebar