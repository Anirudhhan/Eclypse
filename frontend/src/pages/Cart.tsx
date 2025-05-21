import { Link } from 'react-router-dom';
import { ChevronLeft } from "lucide-react";

function Cart() {
  return (
    <div className="text-black w-full justify-center">
      <div className="bg-white sm:pt-20 sm:mx-40 min-h-screen justify-center">
        <div className="sm:mx-10 mx-0 sm:pt-20 pt-25">
          <div className="w-full  p-4">
            <div className="mb-6 flex items-center gap-6">
                <Link to="/">
              <ChevronLeft className="size-8 cursor-pointer" />

                </Link>
              <h1 className="sm:text-2xl text-xl ml-2">Shipping Address</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Side - Address Form */}
              <div className="w-full md:w-[60%] border-3 border-gray-400 rounded-lg p-6">
                <div className="flex items-center mb-6">
                  <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center mr-3">
                    <div className="sm:w-4 sm:h-4 w-3 h-3 rounded-full bg-red-500"></div>
                  </div>
                  <span className="sm:text-2xl text-lg font-medium">
                    Add New Address
                  </span>
                </div>

                <div className="sm:mx-5">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block sm:text-lg text-gray-900 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="w-full border-2 rounded-md p-2 h-15 border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block sm:text-lg text-gray-900 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="w-full border-2 rounded-md p-2 h-15 border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block sm:text-lg text-gray-900 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      className="w-full border-2 rounded-md p-2 h-15 border-gray-300"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block sm:text-lg text-gray-900 mb-1">
                        Apt Number
                      </label>
                      <input
                        type="text"
                        name="aptNumber"
                        className="w-full border-2 rounded-md p-2 h-15 border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block sm:text-lg text-gray-900 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        className="w-full border-2 rounded-md p-2 h-15 border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block sm:text-lg text-gray-900 mb-1">
                        Zip
                      </label>
                      <input
                        type="text"
                        name="zip"
                        className="w-full border-2 rounded-md p-2 h-15 border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="sm:flex hidden gap-5 pb-12 pt-4">
                    <button
                      type="button"
                      className="w-[35%] border-2  text-lg border-gray-300 rounded-md py-3 text-center cursor-pointer"
                    >
                      cancel
                    </button>
                    <button
                      type="button"
                      className="w-[60%] bg-black text-lg text-white rounded-md py-4 text-center cursor-pointer hover:bg-red-600"
                    >
                      Save This Address
                    </button>
                  </div>
                  <div className="flex sm:hidden flex-col gap-5 pb-2 pt-7 sm:pt-0">
                    <button
                      type="button"
                      className="w-full bg-black text-lg text-white rounded-md py-4 text-center"
                    >
                      Save This Address
                    </button>
                    <button
                      type="button"
                      className="w-full border-2  text-lg border-gray-300 rounded-md py-3 text-center"
                    >
                      cancel
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Order Summary */}
              <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg sm:px-10">
                <div className="mb-4 sm:text-lg text-sm text-gray-500">
                  By placing your order, you agree to our company{" "}
                  <a href="#" className="font-medium text-black">
                    Privacy policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-medium text-black">
                    Conditions of use
                  </a>
                  .
                </div>

                <div className="border-t border-b border-gray-300 py-6 mb-4">
                  <h2 className="sm:text-2xl text-xl font-medium mb-4 pb-5">
                    Order Summary
                  </h2>

                  <div className="space-y-4 pb-8">
                    <div className="flex justify-between sm:text-lg text-sm text-gray-600">
                      <span>Items - Silhouette No. 1 – Vermillion</span>
                      <span>7,999</span>
                    </div>

                    <div className="flex justify-between sm:text-lg text-sm text-gray-600">
                      <span>Shipping and handling:</span>
                      <span>200</span>
                    </div>

                    <div className="flex justify-between sm:text-lg text-sm text-gray-600">
                      <span>Before tax:</span>
                      <span>6,599</span>
                    </div>

                    <div className="flex justify-between sm:text-lg text-sm text-gray-600">
                      <span>Tax Collected:</span>
                      <span>1,400</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <h2 className="sm:xtext-2xl text-lg font-medium">Order Total:</h2>
                  <span className="sm:text-2xl text-lg font-medium">8,199</span>
                </div>

                <div className="flex justify-center">
                  <button className="sm:w-[80%] w-full bg-black text-white rounded-md py-4 text-lg text-center cursor-pointer hover:bg-red-600">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
