
import AboutPage from './pages/AboutPage';
import BookDetailPage from './pages/BookDetailPage';
import BookPage from './pages/BookPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ReviewAddPage from './pages/ReviewAddPage';
import ErrorPage from './pages/ErrorPage';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div className="App">
      <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/books" element={<BookPage/>}/>
        <Route path="/books/detail/:id" element={<BookDetailPage />}/>
        <Route path="/review/:id" element={<ReviewAddPage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>


      </Routes>
     </Router>
     </>
     
    </div>
  );
}

export default App;
