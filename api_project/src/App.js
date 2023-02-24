import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import './card.css';

const App = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const data = await axios.get(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=f208773c43d14f478fd2ef640a8c961a"
    );

    console.log(data);
    setData(data);
  };

  // fetchData();
  
  const newsArr = new Array(100);
  for(let i=0; i<100; i++){
    newsArr[i] =  <Card fetchData={data} index={i}/>;
  }
  console.log('news array -- ',newsArr);
  


  return (
    <>
    <button onClick={fetchData}>Click to get data</button>
      {/* <button onClick={fetchData}>Click to get data on console</button> */}
      {/* <Card fetchData={data} index={10}/> */}

      <div className="gridDisplay" >
        {newsArr.map((ele)=>(ele))}
      </div>
    </>
  );
};

export default App;
