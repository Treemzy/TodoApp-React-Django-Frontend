import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/inc/Navbar'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
            <Navbar/>
            <div className="frm">
              <Routes>
                <Route exact path="/" element={<NotesListPage />}/> 
                <Route exact path="/note/:id" element={<NotePage />}/> 
              </Routes>
            </div>          
        </div>        
      </div>
    </Router> 
  );
}

export default App;
