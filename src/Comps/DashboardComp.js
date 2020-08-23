import React from 'react'


function DashboardComp(props) {

    return ( 
        <div className="dashboard app" re-route="dashboard">
            <div className="dashbg"></div> 
            <div className="spacer"></div>
            <h2 className="hometitle">Dashboard</h2>
            <div className="dashgrid">
                <div className="dashbox dashfeature">
                    <div className="dash-feat-bg"></div>
                    <div className="dashtopleft">
                        <img className="teamlogo" src={props.teamlogo} />
                    </div>
                    <div className="dashbottomleft">
                        <h4></h4>
                        <h5>Chicago, U.S.</h5>
                        <h6>Games Played: 12</h6>
                        <button>My Players</button> 
                        <button>My Team</button>
                    </div>
                    <div className="dashbottomright">
                    <div class="lds-ripple"><div></div><div></div></div>
                        <h3>$14M<h5>Budget</h5></h3>
                    </div>
                    <div className="dashtopright">
                        <h3>22 <h5><i className="fas fa-skating"></i>Players</h5></h3>
                        <h3>398 <h5><i className="fas fa-star"></i>Points</h5></h3>
                    </div>
                    <div className="dashmiddle">
                        <h2>Play A Game</h2>
                        <button><i class="fas fa-hockey-puck"></i>Play Now</button>
                    </div>
                </div>
                <div className="dashbox d1 dashmed">
                    <i class="far fa-user"></i>
                    <div className="left">
                        <h4>Paul Byron</h4><h3>#41</h3>
                        <h6>Left Wing</h6>
                    </div>
                    <div className="right">
                        <h4>36<span>Points</span></h4>
                    </div>
                    <svg viewBox="0 0 1240 280"> <defs> <linearGradient id="svggrad1"> <stop offset="5%" stop-color="rgba(202,19,222,1)"/> <stop offset="95%" stop-color="rgba(255,152,164,1)"/> </linearGradient> </defs> <path fill="url(#svggrad1)" fill-opacity="1"d="M0,32L17.1,37.3C34.3,43,69,53,103,80C137.1,107,171,149,206,144C240,139,274,85,309,101.3C342.9,117,377,203,411,213.3C445.7,224,480,160,514,138.7C548.6,117,583,139,617,138.7C651.4,139,686,117,720,133.3C754.3,149,789,203,823,202.7C857.1,203,891,149,926,144C960,139,994,181,1029,170.7C1062.9,160,1097,96,1131,74.7C1165.7,53,1200,75,1234,122.7C1268.6,171,1303,245,1337,266.7C1371.4,288,1406,256,1423,240L1440,224L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path> </svg>
                    <small>View<i class="fas fa-arrow-circle-right"></i></small>
                </div>
                <div className="dashbox d2 dashmed"> 
                    <i class="far fa-user"></i> 
                    <div className="left">
                        <h4>Nick Suzuki</h4><h3>#14</h3>
                        <h6>Centerman</h6>
                    </div>
                    <div className="right">
                        <h4>41<span>Points</span></h4>
                    </div>
                    <svg viewBox="0 0 1240 280"> <defs> <linearGradient id="svggrad2"> <stop offset="5%" stop-color="rgba(49,235,182,1)"/> <stop offset="95%" stop-color="rgba(189,224,22,1)"/> </linearGradient> </defs> <path fill="url(#svggrad2)" fill-opacity="1" d="M0,128L18.5,112C36.9,96,74,64,111,58.7C147.7,53,185,75,222,90.7C258.5,107,295,117,332,117.3C369.2,117,406,107,443,128C480,149,517,203,554,208C590.8,213,628,171,665,149.3C701.5,128,738,128,775,149.3C812.3,171,849,213,886,229.3C923.1,245,960,235,997,202.7C1033.8,171,1071,117,1108,96C1144.6,75,1182,85,1218,106.7C1255.4,128,1292,160,1329,170.7C1366.2,181,1403,171,1422,165.3L1440,160L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path> </svg>
                    <small>View<i class="fas fa-arrow-circle-right"></i></small>
                </div>
                <div className="dashbox d3 dashmed">
                    <i class="far fa-user"></i>
                    <div className="left">
                        <h4>Thomas Tatar</h4><h3>#90</h3>
                        <h6>Left Wing</h6>
                    </div>
                    <div className="right">
                        <h4>56<span>Points</span></h4>
                    </div>
                    <svg viewBox="0 0 1240 280"> <defs> <linearGradient id="svggrad3"> <stop offset="5%" stop-color="rgba(143,71,250,1)"/> <stop offset="95%" stop-color="rgba(21,208,255,1)"/> </linearGradient> </defs> <path fill="url(#svggrad3)" fill-opacity="1" d="M0,32L17.1,32C34.3,32,69,32,103,48C137.1,64,171,96,206,101.3C240,107,274,85,309,69.3C342.9,53,377,43,411,37.3C445.7,32,480,32,514,48C548.6,64,583,96,617,122.7C651.4,149,686,171,720,181.3C754.3,192,789,192,823,202.7C857.1,213,891,235,926,234.7C960,235,994,213,1029,186.7C1062.9,160,1097,128,1131,117.3C1165.7,107,1200,117,1234,138.7C1268.6,160,1303,192,1337,202.7C1371.4,213,1406,203,1423,197.3L1440,192L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path> </svg>
                    <small>View<i class="fas fa-arrow-circle-right"></i></small>
                </div>
                <div className="dashbox dashchart">
                    
                </div> 

            </div>  

        </div>
    )
}

export default DashboardComp 