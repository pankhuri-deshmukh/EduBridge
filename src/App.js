import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Listing from './components/Listing';
import About from './components/About';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/' element={<><Hero /><Listing/></>}/>
        <Route path = '/listing' element={<Listing/>}/>
        <Route path = '/about' element={<About/>}/>
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
