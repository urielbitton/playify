import React from 'react'
import Teambox from './Teambox'
import NewplayerInp from './NewplayerInp'
import MainContext from './MainContext'

function IntroComp(props) { 
    return (
        <div className="intro app">
        <div className="introbg"></div>
        <div className="grid"> 
                 
            <div className="intro-team introcont">
                <h5>1.</h5><h3>&emsp;Choose Your Team&emsp;</h3>
                <div className="spacer"></div>
                 
                <div className="teamboxcont">
                    
                <Teambox teamname="Anaheim Ducks" teamimg={require('../images/NHL_Ducks_Primary.png')}/> 
                <Teambox teamname="Arizona Coyotes" teamimg={require('../images/NHL_Coyotes_Primary.png')}/> 
                <Teambox teamname="Boston Bruins" teamimg={require('../images/NHL_Bruins_Primary.png')} /> 
                <Teambox teamname="Calgary Flames" teamimg={require('../images/calgary.png')}/> 
                <Teambox teamname="Carolina Hurricanes" teamimg={require('../images/carolina.png')}/> 
                <Teambox teamname="Chicago Blackhawks" teamimg={require('../images/chicago.png')}/> 
                <Teambox teamname="Colorado Avalanche" teamimg={require('../images/colorado.png')}/> 
                <Teambox teamname="Columbus Blue Jackets" teamimg={require('../images/NHL_BlueJackets_Primary.png')}/> 
                <Teambox teamname="Dallas Stars" teamimg={require('../images/NHL_Stars_Primary.png')}/>
                <Teambox teamname="Detroit Red Wings" teamimg={require('../images/detroit.png')}/> 
                <Teambox teamname="Edmonton Oilers" teamimg={require('../images/NHL_Oilers_Primary.png')}/> 
                <Teambox teamname="Florida Panthers" teamimg={require('../images/NHL_Panthers_Primary.png')}/> 
                <Teambox teamname="Los Angeles Kings" teamimg={require('../images/NHL_Kings_Primary.png')}/>  
                <Teambox teamname="Minnesota Wild" teamimg={require('../images/NHL_Wild_Primary.png')}/> 
                <Teambox teamname="Montreal Canadiens" teamimg={require('../images/montreal.png')}/> 
                <Teambox teamname="Nashville Predators" teamimg={require('../images/NHL_Predators_Primary.png')}/> 
                <Teambox teamname="New Jersey Devils" teamimg={require('../images/newjersey.png')}/> 
                <Teambox teamname="New York Islanders" teamimg={require('../images/NY-Islanders-Primary.png')}/> 
                <Teambox teamname="New York Rangers" teamimg={require('../images/newyorkr.png')}/>
                <Teambox teamname="Ottawa Senators" teamimg={require('../images/NHL_Senators_Primary.png')}/> 
                <Teambox teamname="Philadelphia Flyers" teamimg={require('../images/philadelphia.gif')}/> 
                <Teambox teamname="Pittsburgh Penguins" teamimg={require('../images/NHL_Penguins_Primary.png')}/> 
                <Teambox teamname="San Jose Sharks" teamimg={require('../images/NHL_Sharks_Primary.png')}/> 
                <Teambox teamname="Seattle Kraken" teamimg={require('../images/seattle-kraken.png')}/> 
                <Teambox teamname="St. Louis Blues" teamimg={require('../images/stlouis.png')}/> 
                <Teambox teamname="Tampa Bay Lightning" teamimg={require('../images/NHL_Lightning_Primary.png')}/> 
                <Teambox teamname="Toronto Maple Leafs" teamimg={require('../images/NHL_MapleLeafs_Primary.png')}/> 
                <Teambox teamname="Vancouver Canucks" teamimg={require('../images/Vancouver_Canucks.png')}/> 
                <Teambox teamname="Vegas Golden Knights" teamimg={require('../images/vegas.png')}/> 
                <Teambox teamname="Washington Capitals" teamimg={require('../images/NHL_Capitals_Primary.png')}/> 
                <Teambox teamname="Winnipeg Jets" teamimg={require('../images/NHL_Jets_Primary.png')}/> 
                <Teambox teamname="Custom team" teamimg={require('../images/nhl.png')}/>  
                  
                </div> 
                
                <div className="intro-actions">
                    <button disabled id="selectteambtn">Select Team<i className="fas fa-long-arrow-alt-right"></i></button>
                    <div className="boxtitle"></div>
                </div>     
                    
            </div>  
 
            <div className="intro-players introcont">
                <h5>2.</h5><h3>&emsp;Create A Player&emsp;</h3>
                <i className="fas fa-angle-left intro-back-btn"></i>
                <h6 className="teaminfo"><img src={props.teamlogo} />{props.teamname}</h6>
                <div className="spacer"></div>
                 
                <div className="teamboxcont playerboxcont">

                    <div className="choosebox newplayersbox">
                        <img src="https://img.icons8.com/emoji/48/000000/ice-hockey-emoji.png"/>
                        <h4>Create New Players</h4>
                    </div>
                    <div className="choosebox existplayersbox">
                        <img src="https://img.icons8.com/color/48/000000/hockey-2.png"/>
                        <h4>Choose Existing Players</h4>
                    </div>

                    <NewplayerInp />
                    
                </div> 
                 
                <div className="intro-actions">
                    <button disabled id="selectplayerbtn">Create Player<i className="fas fa-long-arrow-alt-right"></i></button>
                    <h6 className="created-player-details"><span>{props.playernumber}</span>{props.playername}</h6>
                </div>     
                     
            </div>

            <div className="intro-confirm introcont">
                <h5>3.</h5><h3>&emsp;Confirm Selections&emsp;</h3>
                <i className="fas fa-angle-left intro-back-btn"></i>
                <div className="spacer"></div>
                 
                <div className="confirmboxcont playerboxcont">
                    <div className="team-picked">
                        <img src={props.teamlogo} alt="teamlogo"/>
                        <h2>{props.teamname}</h2>
                    </div>
                    <div className="spacer"></div>
                    <table>
                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Team</th>
                                <th>Number</th>
                                <th>Country</th>
                                <th>Age</th>
                                <th>Skill</th>
                                <th>Date Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr> 
                                <td>{props.playername}</td>
                                <td>{props.teamname}</td>
                                <td>{props.playernumber}</td>
                                <td>{props.playercountry}</td>
                                <td>{props.playerage}</td>
                                <td>{props.playerskill}</td>
                                <td>{props.currentdate}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div> 
                
                <div className="intro-actions">
                    <button id="confirm-start-btn">Confirm & Start<i className="fas fa-long-arrow-alt-right"></i></button>
                </div>     
                     
            </div>  
        
        </div>     
    </div> 
    )
}

export default IntroComp