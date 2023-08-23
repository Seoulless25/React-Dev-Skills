import React from "react";
import "./NewSkillForm.css"

export default function NewSkillForm() {
  return (
    <form className="NewSkillForm">
      <label>Skill</label>
      <input className="skill" type="text" />
      <label>Lvl</label>
      <select className="level">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <button>Add New Skill</button>
    </form>
  );
}