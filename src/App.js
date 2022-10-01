import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from './components/Home';
import {EditUser} from './components/EditUser';
import {AddUser} from './components/AddUser';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
        <Router>
            <Routes>
                <Route exact path="/" element={ <Home />} ></Route>
                <Route exact path="/add" element={ <AddUser /> } ></Route>
                <Route exact path="/edit/:id" element={ <EditUser /> } ></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
