// 1) importer React et ReactDOM import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'; //TP voiture
//import App from './components/App'; //TP component
//import App from './classComponents/App'; //TP class component
const element=document.getElementById("root");
const root=ReactDOM.createRoot(element)

root.render(<App/>)




