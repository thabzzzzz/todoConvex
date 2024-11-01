import { useState } from 'react'
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

import './App.css'

function App() {
  const [text, setText] = useState("");
  const tasks = useQuery(api.tasks.get);
  const addTask = useMutation(api.tasks.add);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (text) {
      await addTask({ text });
      setText(""); 
    }
  };
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div>
        {tasks?.map(({ _id, text }) => (
          <div key={_id}>{text}</div>
        ))}
      </div>
    </>
  )

}

export default App
