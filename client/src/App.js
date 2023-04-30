import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import News from './Pages/News';
import Error from './Pages/Error';
import Header from './Components/Blocks/Header';
import Footer from './Components/Blocks/Footer';
import Contact from './Pages/Contact';

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-website" element={<News />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
