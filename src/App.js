import React from 'react'; 
import './App.css';
import BookPage from './components/BookPage/BookPage';
import Books from './components/Books/Books';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
   
     <Header />
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='/bookPage/:id' element={<BookPage />} />
      </Routes>


    

    </div>
  );
}

export default App;
