import NewSkillForm from './components/NewSkillForm'
import SkillList from './components/SkillList'
import "./styles.css"

function App() {
    return (
        <>
        <div className="App teal-text">
            <h1>React Dev Skills</h1>
            <SkillList skills={skills} />
            <hr></hr>
            <NewSkillForm />
        </div>
        </>
    )
}

const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
]

export default App