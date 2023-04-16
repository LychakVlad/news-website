import Footer from './Components/Blocks/Footer';
import Header from './Components/Blocks/Header';
import MainBlock from './Components/Blocks/MainBlock';
import SocialLinks from './Components/Blocks/SocialLinks';

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <MainBlock />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
