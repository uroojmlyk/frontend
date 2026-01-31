// import { Link } from 'react-router-dom';
// import { ShoppingCart, BookOpen, UserCircle, Menu, X } from 'lucide-react';
// import { useState } from 'react';

// const Navbar = ({ cartCount }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Courses', path: '/courses' },
//     { name: 'About', path: '/about' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 border-b border-gray-100 shadow-sm bg-white/90 backdrop-blur-xl">
//       <div className="container px-4 mx-auto">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3 group">
//             <div className="flex items-center justify-center w-10 h-10 shadow-lg bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-blue-500/30">
//               <BookOpen className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
//               LearnHub Pro
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="items-center hidden space-x-8 md:flex">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className="relative font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600 hover:scale-105 group"
//               >
//                 {link.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
//               </Link>
//             ))}
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center space-x-6">
//             {/* Cart */}
//             <Link to="/cart" className="relative group">
//               <div className="p-2.5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-blue-50 hover:to-blue-100 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-gray-100 hover:border-blue-200">
//                 <ShoppingCart className="w-5 h-5 text-gray-700 transition-colors group-hover:text-blue-600" />
//                 {cartCount > 0 && (
//                   <span className="absolute flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full shadow-lg -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 shadow-red-500/30 animate-pulse">
//                     {cartCount}
//                   </span>
//                 )}
//               </div>
//             </Link>

//             {/* Profile */}
//             <button className="hidden md:flex items-center space-x-3 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 px-4 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border border-gray-100 hover:border-blue-200 group">
//               <UserCircle className="w-5 h-5 text-gray-700 transition-colors group-hover:text-blue-600" />
//               <span className="font-medium text-gray-700 transition-colors group-hover:text-blue-600">
//                 My Account
//               </span>
//             </button>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2.5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border border-gray-100"
//             >
//               {isMenuOpen ? (
//                 <X className="w-5 h-5 text-gray-700" />
//               ) : (
//                 <Menu className="w-5 h-5 text-gray-700" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="p-6 mt-4 border border-gray-100 shadow-2xl md:hidden bg-white/95 backdrop-blur-xl rounded-2xl animate-fadeIn">
//             <div className="space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-4 py-3 font-medium text-gray-700 transition-all duration-300 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <div className="pt-4 border-t border-gray-100">
//                 <button className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
//                   <UserCircle className="w-5 h-5" />
//                   <span>Sign In</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;  




import { Link } from 'react-router-dom';
import { ShoppingCart, BookOpen, UserCircle, Menu, X, Zap, Search } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b shadow-xl backdrop-blur-xl border-white/10 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/70 shadow-black/20">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 shadow-lg bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-cyan-500/30 group-hover:shadow-cyan-500/50 group-hover:scale-110">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text">
                LearnHub Pro
              </span>
              <div className="text-xs font-semibold tracking-widest text-cyan-300 opacity-80">PREMIUM</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative px-3 py-2 group"
              >
                <span className="font-medium text-gray-300 transition-all duration-300 hover:text-white group-hover:scale-105">
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Icon for Mobile */}
            <button className="md:hidden p-2.5 backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-gray-400 hover:text-white rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative group">
              <div className="p-2.5 backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group-hover:scale-110">
                <ShoppingCart className="w-5 h-5 text-gray-300 transition-colors group-hover:text-white" />
                {cartCount > 0 && (
                  <span className="absolute flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full shadow-lg -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 shadow-red-500/50 animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Profile Desktop */}
            <button className="hidden md:flex items-center space-x-3 backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-blue-900/30 hover:to-cyan-900/30 px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 border border-white/10 hover:border-cyan-500/30 group">
              <UserCircle className="w-5 h-5 text-gray-300 transition-colors group-hover:text-cyan-300" />
              <span className="font-medium text-gray-300 transition-colors group-hover:text-white">
                My Account
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="p-6 mt-4 border shadow-2xl md:hidden backdrop-blur-xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-2xl border-white/10 animate-fadeIn">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3.5 px-4 text-gray-300 hover:text-white hover:backdrop-blur-xl hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 font-medium rounded-xl transition-all duration-300 border border-transparent hover:border-white/10"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <button className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
                  <UserCircle className="w-5 h-5" />
                  <span>Sign In</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;