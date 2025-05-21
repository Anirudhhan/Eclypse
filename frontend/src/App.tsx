import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className='bg-black w-full min-h-screen'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
