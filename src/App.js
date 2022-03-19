import React from 'react';
// import './App.css';
import Menu from './components/nav/menu';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './components/Home';
import Works from './components/Works/Works';



function App() {
  const body = document.querySelector('body');
  const all = document.getElementsByTagName('*');
  // const hr = document.querySelector('.hr');
  var i = 0;
  var dColor=[
      {bgColor:"#7fbfca",h3Color:"#a52a2a"},
      {bgColor:"#8857fb",h3Color:"#bfeb27"},
      {bgColor:"#fed243",h3Color:"#71af37"},
      {bgColor:"#000003",h3Color:"#fff3df"},
      {bgColor:"#a52a2a",h3Color:"#ebed75"}
  ];
  body.addEventListener('click', () => {
    i = i < dColor.length - 1 ? ++i : 0;
    body.style.backgroundColor = dColor[i].bgColor;
    // hr.style.backgroundColor = dColor[i].h3Color;
    for (var j=0, max=all.length; j < max; j++) {
      all[j].style.color = dColor[i].h3Color;
    }
  });
  return (
    <Router>
      <Menu />
      <Routes> 
        <Route exact path="/" element={<Home/>} />
        <Route path="/works" element={<Works/>} />
      </Routes>
    </Router>
  );
}

export default App;
