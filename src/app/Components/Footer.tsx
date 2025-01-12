// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">InternForums</h1>
            <p className="text-sm">InternationalForums @ 2017. All rights reserved.</p>
            <p className="text-sm"></p>
          </div>

          {/* Categories */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="font-semibold mb-2">Categories</h3>
            <div className="flex flex-wrap justify-center md:justify-start space-x-3">
              <a href="#" className="hover:underline text-sm">
                Beauty
              </a>
              <a href="#" className="hover:underline text-sm">
                Health
              </a>
              <a href="#" className="hover:underline text-sm">
                Music
              </a>
              <a href="#" className="hover:underline text-sm">
                Sport
              </a>
              <a href="#" className="hover:underline text-sm">
                Design
              </a>
              <a href="#" className="hover:underline text-sm">
                Travel
              </a>
            </div>
          </div>

          {/* Subscribe */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">Subscribe</h3>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-6 space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-800">
            <i className="fab fa-vimeo-v"></i>
          </a>
          <a href="#" className="text-red-500 hover:text-red-600">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
