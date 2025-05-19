
function Navbar() {
  return (
    <div className='w-full fixed top-0 z-10 bg-black/60 backdrop-blur-md sm:py-4 py-7 flex justify-center items-center'>
        <div className="flex relative justify-between w-full mx-4 sm:mx-53 items-center" >
            <img src="/images/brandlogo.jpg" className="rounded-md sm:h-11 h-9  cursor-pointer"/>
            <div className="flex sm:gap-x-10 gap-x-5 sm:text-xl text-white items-center">
                <span  className="cursor-pointer">About Us</span>
                <span className="cursor-pointer">Waitlist</span>
                <span className="cursor-pointer">Cart</span>
                <button className="bg-white text-black rounded-lg sm:px-9 sm:pt-3 sm:pb-2 px-4 py-1.5 font-medium cursor-pointer hover:bg-red-600 hover:text-white duration-300">Buy</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;