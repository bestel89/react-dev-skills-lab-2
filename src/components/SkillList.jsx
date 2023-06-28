import SkillListItem from "./SkillListItem"
import "../SkillList.css"

function SkillList({skills}){
	const skillListItems = skills.map((s, idx) => (
		<SkillListItem skill={s} key={idx} index={idx}/>
		))
	
	return (
		<ul className="SkillList">
      		{skillListItems}
    	</ul>
	)
}

export default SkillList

// {skillListItems[0].props.skill.name}