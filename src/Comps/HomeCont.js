import React from 'react'
import Home from './Home'
import Sidebar from './Sidebar'

function HomeCont() {
    return (
        <div className="homecont">
            <Sidebar />
            <Home />
        </div>
    )
}

export default HomeCont