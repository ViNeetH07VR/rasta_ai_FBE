import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mapcomponent from '../src/components/Mapcomponent';
import Sidenavbar from './components/Sidenavbar';
import Header from './components/Header';
import Body from './components/Body';

export default function App() {
  return (
    <div className="App">
      <div>  <Header/></div>
    
      <Mapcomponent/>
      
      
    </div>
  );
}

