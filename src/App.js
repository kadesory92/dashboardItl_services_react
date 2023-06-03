import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PublicRouter from './routes/PublicRouter'
import AdminRouter from './routes/AdminRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter/>} />
          <Route path="/admin/*" element={<AdminRouter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
