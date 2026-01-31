// // 
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import CourseDetails from './pages/CourseDetails';
// import Cart from './pages/Cart';
// import About from './pages/About';
// import Contact from './pages/Contact';

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (course) => {
//     if (!cart.find(item => item.id === course.id)) {
//       setCart([...cart, course]);
//       alert(`${course.title} added to cart!`);
//     } else {
//       alert('This course is already in your cart.');
//     }
//   };

//   const removeFromCart = (courseId) => {
//     setCart(cart.filter(item => item.id !== courseId));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar cartCount={cart.length} />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home addToCart={addToCart} />} />
//             <Route path="/courses/:id" element={<CourseDetails addToCart={addToCart} />} />
//             <Route path="/cart" element={
//               <Cart 
//                 cart={cart} 
//                 removeFromCart={removeFromCart}
//                 clearCart={clearCart}
//               />
//             } />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;   


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses'; // ✅ IMPORT ADDED
import CourseDetails from './pages/CourseDetails';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (course) => {
    if (!cart.find(item => item.id === course.id)) {
      setCart([...cart, course]);
      alert(`${course.title} added to cart!`);
    } else {
      alert('This course is already in your cart.');
    }
  };

  const removeFromCart = (courseId) => {
    setCart(cart.filter(item => item.id !== courseId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={cart.length} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/courses" element={<Courses />} /> {/* ✅ ROUTE ADDED */}
            <Route path="/courses/:id" element={<CourseDetails addToCart={addToCart} />} />
            <Route path="/cart" element={
              <Cart 
                cart={cart} 
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;