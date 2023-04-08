import React from 'react';
import './App.css';
import Content from './components/Content'
import TopNavbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
    const test="Welcome to Learn"
    const test1="Easy"
  return (
    <div className="App">
        <TopNavbar />
        <Content test={test} test1={test1}/>
        <Footer />
    </div>
  );
}

export default App;
