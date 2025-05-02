// src/components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2">The little things in Kasaragod</h3>
            <p className="text-sm text-gray-400">
              Handcrafted jewelry made with love and tradition. Sparkle in every moment.
            </p>
          </div>
  
          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Products</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm text-gray-400">
              Kasaragod, Kerala<br />
              hello@jewelkasaragod.com<br />
              +91 98765 43210
            </p>
          </div>
        </div>
  
        <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} The little things in Kasaragod. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  