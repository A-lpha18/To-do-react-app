import AppName from "./components/AppName";
import ToDo from "./components/ToDo";
import "./App.css";

import Todocheck from "./components/Todocheck";
function App() {
  const todoList=[
    {
      name:"Buy Milk",
      time:"4/10/2024",
    },
    {
      name:"Go To College",
      time:"4/10/2024",
    },
    {
      name:"Hello",
      time:"4/12/2021",
    },
    {
      name:"Rohit",
      time:"18/11/2003",
    },
  ]; 
  return (
    <center className="cointainer">
      <AppName></AppName>
      <ToDo></ToDo><br />
      <Todocheck check={todoList}></Todocheck>
    </center>
  )
};

export default App;
