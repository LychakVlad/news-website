import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import News from './Pages/News';
import Error from './Pages/Error';
import NewsIdPage from './Pages/NewsIdPage';
import Header from './Components/Blocks/Header';
import Footer from './Components/Blocks/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path="/news-website" element={<News />} />
          <Route exact path="/news-website/:id" element={<NewsIdPage />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
