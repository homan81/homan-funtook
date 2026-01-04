import Link from "next/link";

export default function CartPage() {
  return (
    <div className="container mx-auto px-0 py-0 sm:px-4 sm:py-12 bg-[#E6E6E6] md:bg-transparent">
      <div className="w-full min-h-screen bg-white p-6 md:p-12">
        {/* Header */}
        <h1 className="text-3xl font-semibold">Your Cart</h1>
        <p className="text-gray-500 text-sm mb-6">3 Products in Your Cart</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT SECTION */}
          
          <div className="lg:col-span-2 space-y-4 rounded-xl border-0 sm:border-2 sm:border-[#EAEAEA]">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-4 p-4 border-b border-[#EAEAEA]"
                >
                  {/* ===== TOP SECTION (Image + Details) ===== */}
                  <div className="flex items-center gap-4 flex-1">
                    {/* Image */}
                    <img
                      src="/assets/home/birday-girl.svg"
                      alt="product"
                      className="w-24 h-24 rounded-lg object-cover"
                    />

                    {/* Details */}
                    <div>
                      <h2 className="text-lg font-medium">
                        Shinny Birthday Decor
                      </h2>

                      <p className="text-sm font-semibold mt-1 sm:hidden">
                        ₹4399
                      </p>

                      <div className="bg-[#FFE6EB] flex items-center text-sm text-red-500 gap-1 mt-2 px-2 py-1 rounded-md w-fit">
                        <span>🕒</span> Morning, Friday, May 28
                      </div>
                    </div>
                  </div>

                  {/* ===== BOTTOM SECTION (Price + Buttons) ===== */}
                  <div className="flex flex-col sm:items-end gap-3">
                    {/* Price (Desktop only) */}
                    <p className="hidden sm:block font-semibold text-lg">
                      ₹4399
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {/* Remove */}
                      <button
                        className="flex items-center justify-center gap-2 border border-red-400 text-red-500
                   rounded-md px-4 py-2 text-sm font-medium hover:bg-red-50
                   sm:border-none sm:bg-[#FAE1E1] sm:text-black"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.8"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span className="sm:hidden">Remove</span>
                      </button>

                      {/* Save for Later */}
                      <button
                        className="flex items-center justify-center gap-2 border border-gray-300 text-gray-500
                   rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50
                   sm:border-none sm:bg-[#FAE1E1] sm:text-black"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.8"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.622 1.126-4.312 2.733
               C11.31 4.876 9.623 3.75 7.688 3.75
               5.099 3.75 3 5.765 3 8.25
               c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                        <span className="sm:hidden">Save for Later</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            {/* Footer buttons */}
            <div className="flex items-center justify-between p-4">
              <button className="text-gray-600 underline">
                Remove all from cart
              </button>
              <button className="flex items-center gap-2 text-gray-700">
                ➕ Add Instructions
              </button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="px-1 py-3 bg-pink-50 rounded-xl space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Promocode"
                className="w-full p-2 border border-[#8D8C8C] rounded-md text-[#8D8C8C]"
              />
              <button className="absolute right-0 top-0 py-2.5 px-[15px] text-[#FC6E88] border-l border-l-[#8D8C8C] text-sm ">
                Apply
              </button>
            </div>

            {/* Bill Details */}
            <div>
              <h3 className="font-medium text-lg mb-2">📄 Bill Details</h3>

              <div className="flex justify-between text-sm my-2">
                <span>3 Orders:</span>
                <span>₹8754.00</span>
              </div>

              <div className="flex justify-between text-sm my-2">
                <span>Tax :</span>
                <span>₹175.00</span>
              </div>

              <div className="flex justify-between text-sm text-green-600">
                <span>Discount :</span>
                <span>- ₹1799.00</span>
              </div>

              <div className="border border-[#EAEAEA] mt-3 mb-5"></div>

              <div className="flex justify-between font-medium text-2xl text-[#FF7226]">
                <span>Total:</span>
                <span>₹7,130</span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="flex justify-between mt-4">
              <p className="text-gray-800 font-medium text-sm mb-2">
                Payment Options
              </p>

              <div className="flex items-center gap-6 text-gray-700 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <span>⭕</span>
                  <span>30%</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <span>⭕</span>
                  <span>100%</span>
                </label>
              </div>
            </div>

            <button className="w-full bg-[#FC6E88] text-white py-3 rounded-lg mt-4 hover:bg-pink-600">
              Checkout →
            </button>

            {/* Bottom Icons */}
            <div className="flex items-center justify-between mt-5 text-xs text-gray-700">
              <div className="flex flex-col items-center">
                <img
                  src="/assets/home/rupess.svg"
                  alt="product"
                  className="w-auto h-auto rounded-lg object-cover"
                />
                <p className="mt-3">No Hidden Charges</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/assets/home/profile.svg"
                  alt="product"
                  className="w-auto h-auto rounded-lg object-cover"
                />
                <p className="mt-3">1 Lack+ Trusted Clients</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/assets/home/Secure.svg"
                  alt="product"
                  className="w-auto h-auto rounded-lg object-cover"
                />
                <p className="mt-3">100% Secure Payment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-[27px] font-semibold">
              Customer also like these
            </h3>
            <Link href="#" className="text-(--pinkd) underline">
              View All
            </Link>
          </div>
          <div className="overflow-x-scroll md:overflow-hidden">
            <div className="min-w-[700px] flex justify-between w-full gap-4 [&_p]:text-center [&_p]:text-black [&_p]:lg:text-lg [&_p]:text-md [&_p]:my-4 [&_img]:w-full [&_img]:object-cover [&_img]:rounded-lg">
              <div>
                <img src="/assets/home/Shinny.svg" alt="aniversary_deco" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                  Shinny Birthday decors
                </span>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-yellow-400">★ ★ ★ ★ ★</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">₹4399</span>
                  <span className="text-gray-400 line-through text-sm">
                    ₹4499
                  </span>
                  <span className="text-green-500 text-xs">1% OFF</span>
                </div>
              </div>
              <div>
                <img src="/assets/home/decors.svg" alt="birthday_deco" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                  Shinny Birthday decors
                </span>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-yellow-400">★ ★ ★ ★ ★</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">₹4399</span>
                  <span className="text-gray-400 line-through text-sm">
                    ₹4499
                  </span>
                  <span className="text-green-500 text-xs">1% OFF</span>
                </div>
              </div>
              <div>
                <img src="/assets/home/ShinnyBirthday.svg" alt="shower_deco" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                  Shinny Birthday decors
                </span>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-yellow-400">★ ★ ★ ★ ★</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">₹4399</span>
                  <span className="text-gray-400 line-through text-sm">
                    ₹4499
                  </span>
                  <span className="text-green-500 text-xs">1% OFF</span>
                </div>
              </div>
              <div>
                <img src="/assets/home/h-birth.svg" alt="kids_deco" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium mb-1">
                  Shinny Birthday decors
                </span>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-yellow-400">★ ★ ★ ★ ★</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">₹4399</span>
                  <span className="text-gray-400 line-through text-sm">
                    ₹4499
                  </span>
                  <span className="text-green-500 text-xs">1% OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
