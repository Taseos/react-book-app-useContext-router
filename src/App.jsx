import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BookProvider } from "./BooksContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookToRead from "./pages/BookToRead";

function App() {
  return (
    <>
      <BrowserRouter>
        <BookProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/toread" element={<BookToRead />} />
          </Routes>
        </BookProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

//AIzaSyD2zcWRDvPbJ9sdksof5HhxgSz2CaO1LlE
