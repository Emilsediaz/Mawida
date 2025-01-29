import React from "react";
import ReactDOM from "react-dom/client";
import {Component, Tours} from "./Component";
import Product, {Navbar} from "./Product";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render (
<>
<Component />
<Tours />
<Product />
<Navbar />
</>
);