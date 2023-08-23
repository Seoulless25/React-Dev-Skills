import "./App.css";
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import { useState} from "react";

export default function App() {
  const [skills, setSkills] = useState([
    {name: "JavaScript", lvl: 1},
    {name: "Python", lvl: 1},
    {name: "Express:", lvl: 1},
    {name: "Django", lvl: 1},
    {name: "HTML", lvl: 1},
    {name: "CSS", lvl: 1},
    {name: "React", lvl: 1}
  ]);

  return (
    <div className="App">
      <h1 className="teal=text">React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr />
      <NewSkillForm />
    </div>
  );
}