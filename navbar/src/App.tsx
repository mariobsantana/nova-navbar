import React from 'react';
import logo from './logo.svg';
import './App.css';
import RouteA from './microcomponent/Arrows Nav/Routes/RouteA';
import RouteB from './microcomponent/Arrows Nav/Routes/RouteB'; 
import Appbar from './microcomponent/Appbar';
import { Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Appbar/>} />
        <Route path="routeA" element={<RouteA />}>
        <Route path ="routeB" element={<RouteB />} />
        </Route>
      </Routes>
    </div>
  );
}



