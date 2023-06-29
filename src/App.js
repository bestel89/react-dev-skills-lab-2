//Import assets
import "./styles.css"

//Import useState
import { useState } from 'react'

//Import custom components
import NewSkillForm from './components/NewSkillForm'
import SkillList from './components/SkillList'

function App() {

    //! State
    const [skills, setSkills] = useState([
        { name: "HTML", level: 5 },
        { name: "CSS", level: 3 },
        { name: "JavaScript", level: 4 },
        { name: "Python", level: 2 },
    ])

    //! JSX
    return (
        <div className="App teal-text">
            <h1>React Dev Skills</h1>
            <SkillList skills={skills} />
            <hr></hr>
            <NewSkillForm skills={skills} setSkills={setSkills}/>
        </div>
    )
}

export default App