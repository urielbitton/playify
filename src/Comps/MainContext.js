import React, {useState, createContext} from 'react'

export const MainContext = createContext()

export const MainProvider = (props) => {

    const [teamName, setTeamName] = useState("")
    const [teamLogo, setTeamLogo] = useState("")
    const [playerName, setPlayerName] = useState("")
    const [playerNum, setPlayerNum] = useState("") 
    const [playerCountry, setPlayerCountry] = useState("") 
    const [playerAge, setPlayerAge] = useState("") 
    const [playerSkill, setPlayerSkill] = useState("") 

    return (
        <MainContext.Provider value={[teamName, setTeamName]}>
            {props.children}
        </MainContext.Provider>
    )
 
}


export default MainContext
