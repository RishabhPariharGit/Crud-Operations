import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Create from './components/Create'
import Edit from './components/Edit'
import Home from './components/Home'

const App = () => {
  return (
<div className='main-wrapper'>
<Router>
  <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/create' element = {<Create/>}/>
    <Route path='/edit' element = {<Edit/>}/>

    {/* https://www.geeksforgeeks.org/how-to-build-a-basic-crud-app-with-node-js-and-reactjs/ */}
  </Routes>
</Router>
</div>
  );
}

export default App