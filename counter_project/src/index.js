import React from "react";
import { createRoot } from 'react-dom/client';
import Card from "./Card";

function App(){
    return(
        <>
        <h1>Hello</h1>
        <Card name='ashish'/>
        </>
    )
}

const ele = document.getElementById('root');
const root = createRoot(ele);
root.render(<App/>);

// ReactDOM.render(<App />,document.getElementById('root'));