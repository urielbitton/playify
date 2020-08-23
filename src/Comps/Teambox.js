import React from 'react'

function Teambox(props) {
    return (
        <div className="teambox">
            <img src={props.teamimg}/>
            <h6 className="teamname">{props.teamname}</h6>
        </div> 
    )
} 

export default Teambox