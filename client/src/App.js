import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import News from './Pages/News';
import Error from './Pages/Error';
import Header from './Components/Blocks/Header';
import Footer from './Components/Blocks/Footer';
import Contact from './Pages/Contact';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'YOUR_AUTH0_DOMAIN';
const clientId = 'YOUR_AUTH0_CLIENT_ID';

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <div className="flex flex-col min-h-screen overflow-hidden">
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
    </Auth0Provider>
  );
}

export default App;
