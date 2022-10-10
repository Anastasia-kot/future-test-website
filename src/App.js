import React from 'react'; 
import './App.css';
import BookPage from './components/BookPage/BookPage';
import SearchResults, { Result } from './components/SearchResults/SearchResults';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
   
     <Header />
      <Routes>
        <Route path='/' element={<SearchResults />} />
        <Route path='/bookPage/:id' element={<BookPage />} />
      </Routes>

    </div>
  );
}

export default App;
