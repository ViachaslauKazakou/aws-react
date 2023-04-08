import React from 'react';
import './App.css';
import Header from './components/Header'
import TopNavbar from './components/Navbar'

function App() {
    const test="Welcome to Learn"
    const test1="Easy"
  return (
    <div className="App">
        <TopNavbar />
        <Header test={test} test1={test1}/>
    </div>
  );
}

export default App;
