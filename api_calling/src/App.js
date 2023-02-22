import React from "react";
import { ReactDOM } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./card";



const App = () =>{

  const[data,setData] = useState({});

  const getData = async ()=>{
    const fetchData = await axios.get('https://randomuser.me/api');
    console.log(fetchData.data.results[0]);

    const data = fetchData.results[0];
    setData(data);
  }



  return(
    <>
    <button onClick={getData}>Get Info of User</button>
    <Card details={data}/>
    </>
  )
}

export default App;