import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, title: "Go to gym.", done: false },
  { id: 2, title: "Do some coding.", done: true }
];



export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [task, setTask] = useState("");

  function markAsDone(id) {
    setListe(liste.map(el => el.id === id ? { ...el, done: !el.done } : el));
  };

  function addTask() {
    setListe([...liste, { id: Date.now(), title: task, done: false }]);
    setTask("");
  };

  function deleteTask() {
    setListe(liste.filter(item => !item.done));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="ekleme_formu">
        <input onChange={e => setTask(e.target.value)} value={task} placeholer="listeye ekle" />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="liste">
        {liste.map((item, index) => (
          <li onClick={() => markAsDone(item.id)} key={index} className={item.done ? "done" : ""}>{item.title}</li>
        ))}
      </ul>
      <button onClick={deleteTask} className="temizle">Delete Completed</button>
    </div>
  );
}
