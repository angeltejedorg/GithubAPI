import React from "react";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// Components 
import Home from "./views/Home"
import Followers from "./views/Followers"
import Repository from "./views/Repository";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/:user/followers" element={<Followers/>}/>
      </Routes>
      <Routes>
        <Route path="/:user/repository" element={<Repository/>}/>
      </Routes>
    </BrowserRouter>
  
  </div>
  );
}

export default App;
