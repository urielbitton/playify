import React, {useState, useEffect} from 'react'

function Frontpage() {

    useEffect(() => {
         //startapp btn click
        const startapp = document.querySelector('.startapp')
        const loginbtn = document.querySelector('.login-btn')
        startapp.addEventListener('click', function() {
            document.querySelector('.frontcover').style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            setTimeout(function() {
                document.querySelector('.fronttitles').style.top = "-20px"
                document.querySelector('.fronttitles').style.opacity = "0"
            },200)
            setTimeout(function() {
                document.querySelector('.frontpage').style.display = 'none'
                document.querySelector('.intro').style.display = 'flex'
                setTimeout(function() { document.querySelector('.intro').style.opacity = '1'; },50)
                document.querySelector('.intro-team').style.display = 'block'
            },500) 
            setTimeout(function() {
                document.querySelector('.intro-team').style.top = '0'
                document.querySelector('.intro-team').style.opacity = '1'
            },800)
        }); 
        const homecont = document.querySelector('.homecont')
        const dashgrid = document.querySelector('.dashgrid')
        loginbtn.onclick = () => {
            document.querySelector('.frontcover').style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            setTimeout(function() {
                document.querySelector('.fronttitles').style.top = "-20px"
                document.querySelector('.fronttitles').style.opacity = "0"
            },200)
            setTimeout(function() {
                document.querySelector('.frontpage').style.display = 'none'
                document.querySelector('.homecont').style.display = 'grid'
                setTimeout(() => {
                    homecont.style.opacity = '1'
                    dashgrid.style.top = '0'
                    dashgrid.style.opacity = '1'
                }, 50);
            },500) 
        }
    })

    return (
        <div className="app frontpage"> 
        <div className="registercont ">
            <button><i className="far fa-user-circle"></i>Register</button>
            <button className="login-btn"><i className="fas fa-sign-in-alt"></i>Login</button>    
        </div>
        <div className="frontcover"></div>
        <div className="grid">
        
            <div className="fronttitles">
                <h5>Hockey Playify</h5>
                <h1>Create Your Team</h1>

                <button className="startapp"><i className="fas fa-hockey-puck"></i>Start Now</button>
                <button><i className="fas fa-play-circle"></i>Watch Video</button>    
            </div>
             
        </div>
    </div>
    )
}

export default Frontpage