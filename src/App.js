import "./App.css";
import Header from "./components/Header";
import Inputform from "./components/Inputform";
import Displaydata from "./components/Displaydata";
import { useState } from "react";


var data = [
  { name: "Shehwar", marks: 50 },
  { name: "Ahmad", marks: 50 },
  { name: "Chohan", marks: 50 },
];
function App() {

  const [statedata,setstatedata]=useState(data);


   function getData(data){
    console.log(statedata);
    setstatedata((prevstate)=>{
      return ([data,...prevstate])
    });
  }


  return (
    <div className="App">
      <Header></Header>
      <Inputform sendData={getData} ></Inputform>
      <Displaydata studentData={statedata}></Displaydata>
    </div>
  );
}

export default App;
