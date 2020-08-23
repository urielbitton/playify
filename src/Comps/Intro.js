import React, {useState,useContext, useEffect} from 'react'
import IntroComp from './IntroComp'
import NewplayerInp from './NewplayerInp'
import MainContext from './MainContext'

function Intro() {

    const [teamName, setTeamName] = useContext(MainContext)
    const [teamLogo, setTeamLogo] = useContext(MainContext)
    const [playerName, setPlayerName] = useContext(MainContext)
    const [playerNum, setPlayerNum] = useContext(MainContext)
    const [playerAge, setplayerAge] = useContext(MainContext)
    const [playerCountry, setPlayerCountry] = useContext(MainContext)
    const [playerSkill, setPlayerSkill] = useContext(MainContext)

    useEffect(() => {
        //teambox select
        const teambox = document.querySelectorAll('.teambox');
        const introcont = document.querySelectorAll('.introcont')
        for(let item of teambox) {
            item.onclick = () => {
                for(let i=0;i<teambox.length;i++) {
                    document.getElementsByClassName('teambox')[i].style.background = ''
                    document.getElementsByClassName('teambox')[i].querySelector('h6').style.color = '#555'
                }
                document.querySelector('.boxtitle').style.color = '#555'
                item.style.background = 'var(--color)'
                item.querySelector('.teamname').style.color = '#fff'
                item.style.transform = 'scale(1.05)'
                setTimeout(() => { item.style.transform = 'scale(1)'; },150)
                let boxtitle = item.innerHTML
                document.querySelector('.boxtitle').innerHTML = boxtitle
                document.getElementById('selectteambtn').removeAttribute('disabled')
                setTeamName(document.querySelector('.boxtitle h6').innerHTML)
                setTeamLogo(document.querySelector('.boxtitle img').src)
            }; 
        } 

        //click on selectteambtn
        const selectteambtn = document.getElementById('selectteambtn')
        selectteambtn.onclick = () => {
            document.querySelector('.intro-team').style.top = '-30px'
            document.querySelector('.intro-team').style.opacity = '0'
            setTimeout(function() {
                document.querySelector('.intro-team').style.display = 'none'
            },100)
            setTimeout(function() {
                document.querySelector('.intro-players').style.display = 'block'
            },200)
            setTimeout(function() {
                document.querySelector('.intro-players').style.top = '0';
                document.querySelector('.intro-players').style.opacity = '1'
            },300)
        }
        document.querySelector('.intro-back-btn').addEventListener('click', () => {
            document.querySelector('.intro-players').style.top = '-30px'
            document.querySelector('.intro-players').style.opacity = 0
            setTimeout(() => {
                document.querySelector('.intro-players').style.display = 'none'
                document.querySelector('.intro-team').style.display = 'block'
                setTimeout(() => {
                    document.querySelector('.intro-team').style.opacity = '1'
                    document.querySelector('.intro-team').style.top = '0'
                }, 50);
            }, 50);
            let allinputs = document.querySelectorAll('input') 
            for(let item of allinputs) {
                item.value = ""
            }
        });

        //choice between create ne wplayer - existing player
        const choosebox = document.querySelectorAll('.choosebox')
        const newplayersbox = document.querySelector('.newplayersbox')
        const existplayersbox = document.querySelector('.existplayersbox')
        const closenewplayer = document.querySelector('.closenewplayer')
        const closeexistplayer = document.querySelector('.closeexistplayer')
        const newplayercont = document.querySelector('.newplayercont')
        const existplayercont = document.querySelector('.existplayercont')
        for(let box of choosebox) {
            box.addEventListener('click', () => {
                document.querySelector('.newplayersbox').style.left = '-50px'
                document.querySelector('.existplayersbox').style.left = '50px'
                document.querySelector('.newplayersbox').style.opacity = '0'
                document.querySelector('.existplayersbox').style.opacity = '0'
                setTimeout(() => {
                    document.querySelector('.newplayersbox').style.display = 'none'
                    document.querySelector('.existplayersbox').style.display = 'none'
                }, 100);
            })
        }
        closenewplayer.onclick = () => {
            newplayercont.style.display = 'none'  
            for(let box of choosebox) {
                document.querySelector('.newplayersbox').style.display = 'grid'
                document.querySelector('.existplayersbox').style.display = 'grid'
                setTimeout(() => {
                    document.querySelector('.newplayersbox').style.left = '0'
                    document.querySelector('.existplayersbox').style.left = '0'
                    document.querySelector('.newplayersbox').style.opacity = '1'
                    document.querySelector('.existplayersbox').style.opacity = '1'
                }, 100); 
            } 
        }
        closeexistplayer.onclick = () => {
            existplayercont.style.display = 'none'  
            for(let box of choosebox) {
                document.querySelector('.newplayersbox').style.display = 'grid'
                document.querySelector('.existplayersbox').style.display = 'grid'
                setTimeout(() => {
                    document.querySelector('.newplayersbox').style.left = '0'
                    document.querySelector('.existplayersbox').style.left = '0'
                    document.querySelector('.newplayersbox').style.opacity = '1'
                    document.querySelector('.existplayersbox').style.opacity = '1'
                }, 100); 
            } 
        }
        
        //create new player click
        const playerboxcont = document.querySelector('.playerboxcont')
        const playernameinp = document.querySelector('.playernameinp')
        const playernuminp = document.querySelector('.playernuminp')
        const playercountryinp = document.querySelector('.playercountryinp')
        const playerageinp = document.querySelector('.playerageinp')
        const playerskillinp = document.querySelector('.playerskillinp')
        

        newplayersbox.onclick = () => {
            setTimeout(() => { 
                document.querySelector('.newplayercont').style.display = 'grid'
                setTimeout(() => {
                    document.querySelector('.newplayercont').style.opacity = '1'
                }, 50);  
            }, 100);  
        }
        existplayersbox.onclick = () => {
            setTimeout(() => { 
                document.querySelector('.existplayercont').style.display = 'grid'
                setTimeout(() => {
                    document.querySelector('.existplayercont').style.opacity = '1'
                }, 50);  
            }, 100);  
        }
        playernameinp.oninput = function() {
            if(!this.value == "") {
                setPlayerName(this.value)
            }
        }
        playernuminp.oninput = function() {
            if(!this.value == "") {
                setPlayerNum(this.value) 
            } 
        }
        //validate max and min input
        playernuminp.oninput = function() {
            if (this.value.length > 2) {
                this.value = this.value.slice(0,2); 
                setPlayerNum(this.value)
            }
            this.value = this.value.replace("-", "")
            setPlayerNum(this.value)
        }
        playercountryinp.oninput = function() {
            setPlayerCountry(this.value) 
        }
        playerageinp.oninput = function() {
            setplayerAge(this.value) 
        }
        playerskillinp.oninput = function() {
            setPlayerSkill(this.value) 
        }
        let reqinputs = document.querySelectorAll('input')
        for(let item of reqinputs) {
            item.onkeyup = () => {
                if(!playernameinp.value == "" && !playernuminp.value == "") {
                    document.getElementById("selectplayerbtn").removeAttribute('disabled')
                }
                else {
                    document.getElementById("selectplayerbtn").setAttribute('disabled','true')
                }
            }; 
        } 

        const selectplayerbtn = document.querySelector('#selectplayerbtn')
        selectplayerbtn.onclick = () => {
            document.querySelector('.intro-players').style.top = '-30px'
            document.querySelector('.intro-players').style.opacity = '0'
            setTimeout(() => {
                document.querySelector('.intro-players').style.display = 'none'
                document.querySelector('.intro-confirm').style.display = 'block'
                setTimeout(() => {
                    document.querySelector('.intro-confirm').style.opacity = '1'
                    document.querySelector('.intro-confirm').style.top = '0'
                }, 50);
            }, 50);
        }
        const confirmstartbtn = document.getElementById('confirm-start-btn')
        const intro = document.querySelector('.intro')
        const homecont = document.querySelector('.homecont')
        const dashgrid = document.querySelector('.dashgrid')
        confirmstartbtn.onclick = () => {
            for(let item of introcont) {
                item.style.top = '-30px'
                item.style.opacity = '0'
                setTimeout(() => {
                    item.style.display = 'none'
                    intro.style.display = 'none'
                }, 100);
                setTimeout(() => {
                    homecont.style.display = 'grid'
                    setTimeout(() => {
                        homecont.style.opacity = '1'
                        dashgrid.style.top = '0'
                        dashgrid.style.opacity = '1'
                    }, 50);
                }, 200);
            }
        }

    },[]); 

    function tableDate() {
        let nmonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        let d = new Date()
        let month = nmonth[d.getMonth()+1]
        let day = d.getDate()
        let output = month + " " + (day<10 ? '0' : '') + day + " " + d.getFullYear()
        return output
    }  
       
    return ( 
        <>
            <IntroComp 
                playername={playerName} 
                teamname={teamName} 
                playernumber={playerNum} 
                teamlogo={teamLogo} 
                playercountry={playerCountry}
                playerage={playerAge}
                playerskill={playerSkill}
                currentdate={tableDate()}
            />

        </>
    )
}

export default Intro
