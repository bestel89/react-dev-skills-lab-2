import "../SkillListItem.css"

function SkillListItem({skill, index}){
    console.log(skill)
	return (
		<li className="SkillListItem"> {skill.name} <p className="level">LEVEL {skill.level}</p> </li>
	)
}

export default SkillListItem