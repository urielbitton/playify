import React from 'react'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import MyTeam from './MyTeam'
import PlayNow from './PlayNow'
import Players from './Players'
import Profile from './Profile'
import Settings from './Settings'

 
function Home() {
    return (
        <div className="home">
            <Navbar />
            <Dashboard />
            <MyTeam />
            <PlayNow />
            <Players />
            <Profile />
            <Settings />
        </div>
    )
}

export default Home