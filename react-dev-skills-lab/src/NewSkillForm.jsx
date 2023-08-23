import React, { useState } from "react";
import "./NewSkillForm.css"

export default function NewSkillForm({addSkill}) {
    const [formData, setFormData] = useState({
        name:"",
        lvl: 1,
    })

    function handleChange(evt) {
        const newFormData = {...formData, [evt.target.name]: evt.target.value};
        setFormData(newFormData);
    }

    function handleAddSkill(evt) {
        evt.preventDefault();
        addSkill(formData);
        setFormData({ name: "", lvl: 1});
    }

    return (
        <form className="NewSkillForm" onSubmit={handleAddSkill}>
            <label>Skills</label>
            <input
                name="name"
                className="skill"
                type="text"
                value={formData.name}
                onChange={handleChange}
            />

            <label>Lvl</label>
            <select name="level" className="level" value={formData.level} onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit">Add New Skill</button>
        </form>
    );
}