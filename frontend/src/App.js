import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { About } from './pages/About';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ContactUs from './pages/ContactUs';
import { Blog } from './pages/Blog';
import { AndroidApp, Blockchain, DataScience, DigitalMarketing, IosApp, PythonBackend } from './pages/Services';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about-us' exact element={<About />} />
        <Route path='/contact-us' exact element={<ContactUs />} />
        <Route path='/blog' exact element={<Blog />} />
        <Route path='/android-app-development' exact element={<AndroidApp />} />
        <Route path='/ios-app-development' exact element={<IosApp />} />
        <Route path='/python-backend-development' exact element={<PythonBackend />} />
        <Route path='/data-science-automation' exact element={<DataScience />} />
        <Route path='/blockchain' exact element={<Blockchain />} />
        <Route path='/digital-marketing' exact element={<DigitalMarketing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
