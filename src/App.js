import React from 'react'; 
import './App.css';
import Books from './components/Books/Books';
import Header from './components/Header/Header'; 



function App() {
  return (
    <div className="App">
   
     <Header />
     <Books />
    </div>
  );
}

export default App;
