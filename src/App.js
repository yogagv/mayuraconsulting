import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routing from './components/routes/Routing';
import './App.css';

function App() {
  return (
    <div>
       <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
