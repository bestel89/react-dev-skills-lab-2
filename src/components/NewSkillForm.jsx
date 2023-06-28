import "../NewSkillForm.css"

function NewSkillForm(){
	return (
		<>
        <h3>Add a Skill</h3>
        <form className="NewSkillForm">
            <label>Skill to add:</label>
            <input></input>
            <label>Level</label>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            <button>ADD SKILL</button>
        </form>
        </>
	)
}

export default NewSkillForm

