import React from 'react'

function NewplayerInp() {
    return ( 
        <>
        <div className="newplayercont">
            <i className="close closenewplayer"></i>
            <img src={require("../images/createplayer1.jpg")} />
            <div className="innercreateplayer"> 
                <h4><i className="fas fa-font"></i>Player Name</h4><input type="text" className="playernameinp"/>
                <h4><i className="fas fa-tshirt"></i>Jersey Number</h4><input type="number" max="99" min="0" className="playernuminp"/>
                <h4><i className="fas fa-flag"></i>Country</h4><input className="playercountryinp"/>
                <h4><i className="fab fa-pagelines"></i>Player Age</h4><input type="number"  max="99" min="0" className="playerageinp"/>
                <h4><i className="fas fa-star-half-alt"></i>Skills Rating</h4><input type="number" className="playerskillinp"/> 
            </div>
        </div>

        <div className="existplayercont">
            <i className="close closeexistplayer"></i>
        </div>
        </> 
    )
} 

export default NewplayerInp
