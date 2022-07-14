import React from "react";
import "./App.css";
import TextField from "./components/TextField";

const App: React.FC  = () => {
  return <div>
    <TextField text="hello" person={{firstname: "bob", lastname: "yolo"}} 
    />
  </div>
  
}

export default App;
