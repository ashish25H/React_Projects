import React from "react";
import { createRoot } from 'react-dom/client';
import Card from "./Card";

function App(){
    return(
        <>
        <h1 className="center">Counter Project</h1>
        <Card />
        </>
    )
}

const ele = document.getElementById('root');
const root = createRoot(ele);
root.render(<App/>);

// ReactDOM.render(<App />,document.getElementById('root'));