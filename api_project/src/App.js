import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";

const App = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const data = await axios.get(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=f208773c43d14f478fd2ef640a8c961a"
    );

    console.log(data);
    setData(data);
  };

  return (
    <>
      <button onClick={fetchData}>Click to get data on console</button>
      <Card fetchData={data} />
    </>
  );
};

export default App;
