import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sample from './pages/Sample';

function App() {

  return (
    <div className='bg-black w-full min-h-screen'>
      <Navbar/>
      <Home/>
      {/* <Sample/> */}
    </div>
  )
}

export default App;
