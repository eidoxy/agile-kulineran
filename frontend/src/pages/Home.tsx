import Navbar from "../components/Navbar"

import riceImg from "../images/rice-bowl.png"

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="items-center justify-center bg-gray-100 h-screen">
        <div className="flex items-center justify-center px-24">
          <div className="w-1/2 p-4">
            <div className="grid">
              <p className='text-5xl font-serif text-black mb-4'>Nothing Brings People Together Like Good Food</p>
              <div className="text-sm font-sans text-black">Our food restaurant delights all senses and serves dinner Wednesday to Sunday, Deeply impressive from the tiny amuse bounches</div>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <img src={riceImg} alt="" loading="lazy" className="h-1/2" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 h-screen">
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-screen">

            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-serif font-bold mb-4">Experience Taste Of Dishes</h1>
              <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded">Get Promo Code</button>
            </div>

            <div className="grid grid-cols-2">

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 mb-2" />
                <p className="text-lg">Makanan 1</p>
                <p className="text-red-500">Rp. 20,000</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 mb-2" />
                <p className="text-lg">Makanan 1</p>
                <p className="text-red-500">Rp. 20,000</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 mb-2" />
                <p className="text-lg">Makanan 1</p>
                <p className="text-red-500">Rp. 20,000</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 mb-2" />
                <p className="text-lg">Makanan 1</p>
                <p className="text-red-500">Rp. 20,000</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 mb-2" />
                <p className="text-lg">Makanan 1</p>
                <p className="text-red-500">Rp. 20,000</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 mb-2" />
                <p className="text-lg">Makanan 1</p>
                <p className="text-red-500">Rp. 20,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home