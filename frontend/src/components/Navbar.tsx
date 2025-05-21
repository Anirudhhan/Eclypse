import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='w-full fixed top-0 z-10 bg-black/60 backdrop-blur-md md:py-4 py-7 flex justify-center items-center'>
        <div className="flex relative justify-between w-full mx-4 md:mx-53 items-center" >
          <Link to='/'>
            <img src="/images/brandlogo.jpg" className="rounded-md md:h-11 h-9  cursor-pointer"/>

          </Link>
            <div className="flex md:gap-x-10 gap-x-5 md:text-xl text-white items-center">
                <Link to="/"  className="cursor-pointer">About Us</Link>
                <Link to="/" className="cursor-pointer">Waitlist</Link>
                <Link to='/cart' className="cursor-pointer">Cart</Link>
                <Link to='/cart'>
                <button className="bg-white text-black rounded-lg md:px-9 md:pt-3 md:pb-2 px-4 py-1.5 font-medium cursor-pointer hover:bg-red-600 hover:text-white duration-300">Buy</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;