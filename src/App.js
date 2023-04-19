import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import News from './Pages/News';
import Error from './Pages/Error';
import Header from './Components/Blocks/Header';
import Footer from './Components/Blocks/Footer';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/news-website" element={<News />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
