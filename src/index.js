import React from "react";
import ReactDOM from "react-dom/client";
//import {Component} from "./component"


const root = ReactDOM.createRoot(document.getElementById('root'))
function Component() {
    return <div>
        <h1>Esto es un componente</h1>
        <p>componente</p>
</div>

}
root.render (<div>
     <Component /> 
     <Component />
     <Component />
     
</div>)