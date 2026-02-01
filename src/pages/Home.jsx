// // 



// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Star, Clock, User, ArrowRight, PlayCircle } from 'lucide-react';
// import SearchBar from '../components/SearchBar';
// import Spinner from '../components/Spinner';

// const Home = ({ addToCart }) => {
//   const [courses, setCourses] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   useEffect(() => {
//     // ✅ ORIGINAL SEARCH LOGIC - NO CHANGES
//     const filtered = courses.filter(course =>
//       course.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredCourses(filtered);
//   }, [searchTerm, courses]);

//   const fetchCourses = async () => {
//     try {
//       // ✅ ORIGINAL API CALL - NO CHANGES
//       const response = await fetch('http://localhost:5000/api/courses');
//       const data = await response.json();
//       setCourses(data);
//       setFilteredCourses(data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//       setLoading(false);
//     }
//   };

//   const categories = [
//     "Web Development", "Data Science", "UI/UX Design", 
//     "Mobile Apps", "Business", "Marketing"
//   ];

//   if (loading) return <Spinner />;

//   return (
//     <div className="min-h-screen overflow-hidden text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
//       {/* Full Screen Hero Section */}
//       <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
//         {/* Background with Image */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=2070')] bg-cover bg-center"></div>
//           <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90"></div>
          
//           {/* Animated Elements */}
//           <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl"></div>
//           <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
//         </div>

//         <div className="container relative z-10 px-4 py-32 mx-auto">
//           <div className="max-w-6xl mx-auto">
//             {/* Hero Content */}
//             <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
//               <div className="lg:w-1/2">
//                 <div className="inline-flex items-center px-6 py-2 mb-8 space-x-2 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
//                   <span className="text-cyan-300">🎯</span>
//                   <span className="font-semibold">#1 Learning Platform</span>
//                 </div>
                
//                 <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
//                   <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
//                     Master Skills
//                   </span>
//                   <br />
//                   <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text">
//                     Shape Your Future
//                   </span>
//                 </h1>
                
//                 <p className="mb-10 text-xl leading-relaxed text-gray-300">
//                   Join thousands of professionals learning from industry leaders. 
//                   Transform your career with cutting-edge courses designed for success.
//                 </p>
                
//                 <div className="flex flex-col gap-4 sm:flex-row">
//                   <Link 
//                     to="#courses" 
//                     className="flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 transform group bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1"
//                   >
//                     Explore Courses
//                     <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
//                   </Link>
                  
//                   <button className="flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-transparent border-2 group border-white/20 rounded-xl hover:bg-white/5">
//                     Watch Demo
//                   </button>
//                 </div>
//               </div>

//               {/* Stats */}
//               <div className="lg:w-1/2">
//                 <div className="p-8 border bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border-white/10">
//                   <div className="grid grid-cols-2 gap-6">
//                     <div className="text-center">
//                       <div className="mb-2 text-4xl font-bold text-cyan-300">50K+</div>
//                       <div className="text-gray-400">Active Students</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="mb-2 text-4xl font-bold text-purple-300">200+</div>
//                       <div className="text-gray-400">Premium Courses</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="mb-2 text-4xl font-bold text-green-300">98%</div>
//                       <div className="text-gray-400">Success Rate</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="mb-2 text-4xl font-bold text-yellow-300">150+</div>
//                       <div className="text-gray-400">Countries</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Search Section */}
//       <section className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-4xl mx-auto mb-12 text-center">
//             <h2 className="mb-6 text-4xl font-bold md:text-5xl">
//               <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
//                 Find Your Perfect Course
//               </span>
//             </h2>
//             <p className="text-xl text-gray-300">
//               Browse through our premium courses taught by industry experts
//             </p>
//           </div>
          
//           {/* Search Bar */}
//           <div className="mb-12">
//             <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
//           </div>
          
//           {/* Categories */}
//           <div className="flex flex-wrap justify-center gap-3 mb-16">
//             {categories.map((category, index) => (
//               <button
//                 key={index}
//                 className="px-6 py-3 font-medium text-gray-300 transition-all duration-300 border rounded-full bg-white/5 hover:bg-white/10 border-white/10 hover:text-white hover:border-white/30 hover:shadow-lg backdrop-blur-sm"
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Courses Grid */}
//       <section id="courses" className="py-16 bg-gradient-to-b from-gray-900/50 to-black/50">
//         <div className="container px-4 mx-auto">
//           <div className="mb-16 text-center">
//             <h2 className="mb-6 text-5xl font-bold">
//               <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
//                 Featured Courses
//               </span>
//             </h2>
//             <p className="max-w-2xl mx-auto text-xl text-gray-400">
//               Handpicked by our experts to boost your skills
//             </p>
//           </div>
          
//           {filteredCourses.length === 0 ? (
//             <div className="py-20 text-center">
//               <div className="flex items-center justify-center w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
//                 <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                 </svg>
//               </div>
//               <h3 className="mb-4 text-3xl font-bold text-white">No courses found</h3>
//               <p className="text-lg text-gray-500">Try searching with different keywords</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {filteredCourses.map(course => (
//                 <div key={course.id} className="relative group">
//                   {/* Glow Effect */}
//                   <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:opacity-100"></div>
                  
//                   {/* Course Card */}
//                   <div className="relative overflow-hidden transition-all duration-500 border bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border-white/10 hover:border-white/20 group-hover:-translate-y-2">
//                     {/* Image Container */}
//                     <div className="relative h-56 overflow-hidden">
//                       <img 
//                         src={course.image} 
//                         alt={course.title}
//                         className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
//                       {/* Price Tag */}
//                       <div className="absolute px-4 py-2 text-lg font-bold text-white shadow-2xl top-4 right-4 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-md rounded-xl">
//                         ${course.price}
//                       </div>
//                     </div>
                    
//                     {/* Course Content */}
//                     <div className="p-6">
//                       <div className="flex items-center justify-between mb-4">
//                         <div className="flex items-center space-x-4">
//                           <span className="flex items-center text-sm text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-full">
//                             <Clock className="w-4 h-4 mr-2" />
//                             {course.duration}
//                           </span>
//                           <div className="flex items-center bg-yellow-500/10 text-yellow-300 px-3 py-1.5 rounded-full">
//                             <Star className="w-4 h-4 mr-2 fill-current" />
//                             <span className="font-bold">{course.rating}</span>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-cyan-300 line-clamp-1">
//                         {course.title}
//                       </h3>
                      
//                       <p className="mb-5 leading-relaxed text-gray-400 line-clamp-2">
//                         {course.description}
//                       </p>
                      
//                       {/* Instructor */}
//                       <div className="flex items-center p-3 mb-6 border bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border-white/5">
//                         <div className="flex items-center justify-center w-10 h-10 mr-3 font-bold text-white bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
//                           {course.instructor.charAt(0)}
//                         </div>
//                         <div>
//                           <div className="font-semibold text-white">{course.instructor}</div>
//                           <div className="text-sm text-gray-500">Lead Instructor</div>
//                         </div>
//                       </div>
                      
//                       {/* Action Buttons */}
//                       <div className="flex space-x-3">
//                         <Link 
//                           to={`/courses/${course.id}`}
//                           className="flex-1 px-6 py-3 font-semibold text-center text-white transition-all duration-300 border bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl hover:from-gray-600 hover:to-gray-700 border-white/10 hover:border-white/20 hover:shadow-lg"
//                         >
//                           View Details
//                         </Link>
//                         <button
//                           onClick={() => addToCart(course)}
//                           className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30 border border-cyan-500/30"
//                         >
//                           Add to Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
          
//           {/* View All Button */}
//           <div className="mt-16 text-center">
//             <Link 
//               to="/courses"
//               className="inline-flex items-center px-8 py-3 font-bold text-white transition-all duration-300 border bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border-white/10 hover:border-white/30 rounded-xl hover:shadow-xl hover:shadow-white/10 group"
//             >
//               View All Courses
//               <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
//         <div className="container px-4 mx-auto text-center">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="mb-8 text-5xl font-bold leading-tight">
//               <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
//                 Ready to Transform
//               </span>
//               <br />
//               <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text">
//                 Your Career?
//               </span>
//             </h2>
            
//             <p className="max-w-2xl mx-auto mb-12 text-xl leading-relaxed text-gray-300">
//               Join thousands of successful students. Start your learning journey today.
//             </p>
            
//             <div className="flex flex-col justify-center gap-4 sm:flex-row">
//               <button className="px-10 py-4 text-lg font-bold text-white transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1">
//                 Start Free Trial
//               </button>
//               <button className="px-10 py-4 text-lg font-bold text-white transition-all duration-300 bg-transparent border-2 border-white/20 rounded-xl hover:bg-white/5">
//                 Schedule a Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;    


 import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, User, ArrowRight, PlayCircle, Award, TrendingUp, Shield, ChevronRight, Sparkles, Zap, Globe, Users } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';

const Home = ({ addToCart }) => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    // Fix: Properly filter courses based on search term
    if (searchTerm.trim() === '') {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(course => {
        // Check if course and title exist
        if (!course || !course.title) return false;
        
        // Convert to lowercase for case-insensitive search
        const title = course.title.toLowerCase();
        const search = searchTerm.toLowerCase();
        
        return title.includes(search);
      });
      setFilteredCourses(filtered);
    }
  }, [searchTerm, courses]);

  const fetchCourses = async () => {
    try {
      const response = await fetch('https://backend-production-505a.up.railway.app/api/courses');
      const result = await response.json();
      console.log('API Response:', result); // Debug log
      
      if (result.success && result.data && Array.isArray(result.data)) {
        setCourses(result.data);
        setFilteredCourses(result.data);
      } else if (result.success && Array.isArray(result)) {
        // If API returns array directly without wrapper
        setCourses(result);
        setFilteredCourses(result);
      } else {
        console.error('Error fetching courses: Invalid data format', result);
        setCourses([]);
        setFilteredCourses([]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setCourses([]);
      setFilteredCourses([]);
      setLoading(false);
    }
  };

  const stats = [
    { icon: Users, value: "50K+", label: "Active Students", color: "text-blue-400" },
    { icon: Award, value: "200+", label: "Premium Courses", color: "text-purple-400" },
    { icon: Globe, value: "150+", label: "Countries", color: "text-green-400" },
    { icon: TrendingUp, value: "98%", label: "Success Rate", color: "text-yellow-400" }
  ];

  const categories = [
    { name: "Web Development", icon: "💻", color: "from-blue-500/20 to-blue-600/20" },
    { name: "Data Science", icon: "📊", color: "from-purple-500/20 to-purple-600/20" },
    { name: "UI/UX Design", icon: "🎨", color: "from-pink-500/20 to-rose-600/20" },
    { name: "Mobile Apps", icon: "📱", color: "from-green-500/20 to-emerald-600/20" },
    { name: "Business", icon: "💼", color: "from-yellow-500/20 to-amber-600/20" },
    { name: "Marketing", icon: "📈", color: "from-red-500/20 to-orange-600/20" }
  ];

  if (loading) return <Spinner />;

  return (
    <div className="min-h-screen overflow-hidden text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Full Screen Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=2070')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          
          {/* Floating Elements */}
          <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl"></div>
          <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
          <div className="absolute w-64 h-64 rounded-full top-3/4 left-3/4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-4 py-32 mx-auto">
          <div className="max-w-5xl mx-auto">
            {/* Header with Badge */}
            <div className="flex flex-col items-center mb-12">
              <div className="inline-flex items-center px-6 py-3 mb-8 space-x-3 border rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border-white/10">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold text-cyan-100">🎯 #1 Learning Platform 2024</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
              </div>
              
              <h1 className="mb-8 font-bold leading-tight text-center text-7xl md:text-8xl">
                <span className="text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text">
                  Master Skills
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text">
                  Shape Your Future
                </span>
              </h1>
              
              <p className="max-w-3xl mb-12 text-2xl leading-relaxed text-center text-gray-300">
                Join 50,000+ professionals learning from industry leaders. 
                Transform your career with cutting-edge courses designed for the modern world.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="p-8 mb-16 border bg-gradient-to-r from-white/5 via-white/5 to-white/5 backdrop-blur-xl rounded-2xl border-white/10">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`text-5xl font-bold mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="font-medium text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-6 mb-20 sm:flex-row">
              <Link 
                to="#courses" 
                className="group relative bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 flex items-center animate-gradient-x"
              >
                <span className="relative z-10 flex items-center">
                  Start Learning Free
                  <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl group-hover:opacity-100 blur-xl"></div>
              </Link>
              
              <button className="flex items-center px-10 py-5 text-xl font-bold text-white transition-all duration-300 bg-transparent border-2 group border-white/20 hover:border-white/40 rounded-2xl hover:bg-white/5 backdrop-blur-sm">
                <PlayCircle className="w-6 h-6 mr-3 transition-colors group-hover:text-cyan-400" />
                Watch Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <div className="mb-2 text-sm text-gray-400">Featured in</div>
                <div className="text-xl font-bold text-white">TechCrunch</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-sm text-gray-400">Rated</div>
                <div className="text-xl font-bold text-white">★★★★★ 4.9</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-sm text-gray-400">Partner</div>
                <div className="text-xl font-bold text-white">Google Cloud</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute transform -translate-x-1/2 bottom-10 left-1/2 animate-bounce">
          <div className="flex justify-center w-6 h-10 border-2 rounded-full border-white/30">
            <div className="w-1 h-3 mt-2 rounded-full bg-white/50 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Search & Categories Section */}
      <section className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50 backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="mb-6 text-5xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
                Discover Your Path
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Browse {courses.length} expert-led courses. Find what resonates with your goals.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            {searchTerm && (
              <div className="mt-4 text-center">
                <p className="text-gray-400">
                  Showing {filteredCourses.length} of {courses.length} courses for "{searchTerm}"
                </p>
              </div>
            )}
          </div>
          
          {/* Categories Grid */}
          <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`group bg-gradient-to-br ${category.color} backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-left hover:border-white/30 hover:scale-105 transition-all duration-500`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">{category.name}</h3>
                    <div className="flex items-center text-gray-400 transition-colors group-hover:text-cyan-300">
                      <span>Explore courses</span>
                      <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="py-24 bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="container px-4 mx-auto">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center px-6 py-2 mb-6 space-x-2 border rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border-white/10">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold text-gray-200">🔥 Trending Now</span>
            </div>
            <h2 className="mb-6 text-6xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                Featured Courses
              </span>
              {searchTerm && (
                <span className="block mt-4 text-2xl text-cyan-300">
                  Search Results for "{searchTerm}"
                </span>
              )}
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-400">
              {searchTerm 
                ? `Found ${filteredCourses.length} courses matching "${searchTerm}"`
                : "Handpicked by industry experts. Start your journey with these top-rated programs."
              }
            </p>
          </div>
          
          {filteredCourses.length === 0 ? (
            <div className="py-20 text-center">
              <div className="flex items-center justify-center w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-3xl font-bold text-white">
                {searchTerm ? `No courses found for "${searchTerm}"` : "No courses available"}
              </h3>
              <p className="mb-8 text-lg text-gray-500">
                {searchTerm ? "Try a different search term" : "Check back later for new courses"}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-8 py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  Clear Search
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses.map(course => (
                  <div key={course.id || course._id} className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:opacity-100"></div>
                    
                    {/* Course Card */}
                    <div className="relative overflow-hidden transition-all duration-500 border bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border-white/10 hover:border-white/20 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Badges */}
                        <div className="absolute flex gap-2 top-4 left-4">
                          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                            Bestseller
                          </span>
                          <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                            New
                          </span>
                        </div>
                        
                        {/* Price */}
                        <div className="absolute px-6 py-3 text-xl font-bold text-white shadow-2xl bottom-4 right-4 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-md rounded-2xl">
                          ${course.price || 49.99}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center px-4 py-2 text-sm rounded-full text-cyan-300 bg-cyan-500/10">
                              <Clock className="w-4 h-4 mr-2" />
                              {course.duration || '8 hours'}
                            </span>
                            <div className="flex items-center px-4 py-2 text-yellow-300 rounded-full bg-yellow-500/10">
                              <Star className="w-4 h-4 mr-2 fill-current" />
                              <span className="font-bold">{course.rating || 4.8}</span>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-cyan-300 line-clamp-1">
                          {course.title}
                        </h3>
                        
                        <p className="mb-6 leading-relaxed text-gray-400 line-clamp-2">
                          {course.description}
                        </p>
                        
                        {/* Instructor */}
                        <div className="flex items-center p-4 mb-8 border bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border-white/5">
                          <div className="flex items-center justify-center w-12 h-12 mr-4 font-bold text-white bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                            {course.instructor ? course.instructor.charAt(0) : 'E'}
                          </div>
                          <div>
                            <div className="font-semibold text-white">{course.instructor || 'Expert Instructor'}</div>
                            <div className="text-sm text-gray-500">Industry Expert</div>
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                          <Link 
                            to={`/courses/${course.id || course._id}`}
                            className="flex-1 px-6 py-4 font-semibold text-center text-white transition-all duration-300 border bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl hover:from-gray-600 hover:to-gray-700 border-white/10 hover:border-white/20 hover:shadow-lg"
                          >
                            Learn More
                          </Link>
                          <button
                            onClick={() => addToCart(course)}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30 border border-cyan-500/30"
                          >
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Search Results Info */}
              {searchTerm && (
                <div className="mt-12 text-center">
                  <div className="inline-flex items-center px-8 py-4 space-x-4 border bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border-white/10 rounded-2xl">
                    <div className="text-cyan-300">
                      <span className="font-bold">{filteredCourses.length}</span> courses found
                    </div>
                    <div className="w-px h-6 bg-white/20"></div>
                    <button
                      onClick={() => setSearchTerm('')}
                      className="flex items-center text-gray-300 transition-colors hover:text-white"
                    >
                      Clear search
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
          
          {/* View All */}
          <div className="mt-20 text-center">
            <Link 
              to="/courses"
              className="inline-flex items-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 border group bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border-white/10 hover:border-white/30 rounded-2xl hover:shadow-xl hover:shadow-white/10"
            >
              View All Courses
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container px-4 mx-auto text-center">
          <div className="relative max-w-4xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            
            <div className="relative p-16 border bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl border-white/10">
              <span className="inline-block px-6 py-2 mb-8 font-semibold border rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border-white/10 text-cyan-100">
                🚀 Limited Time Offer
              </span>
              
              <h2 className="mb-8 text-5xl font-bold leading-tight md:text-6xl">
                <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                  Start Your Journey
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text">
                  Today
                </span>
              </h2>
              
              <p className="max-w-2xl mx-auto mb-12 text-xl leading-relaxed text-gray-300">
                Join thousands who have transformed their careers. 7-day free trial, no credit card required.
              </p>
              
              <div className="flex flex-col justify-center gap-6 sm:flex-row">
                <button className="group bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 transform hover:-translate-y-1 animate-gradient-x">
                  <span className="flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2" />
                  </span>
                </button>
                <button className="px-12 py-5 text-xl font-bold text-white transition-all duration-300 bg-transparent border-2 group border-white/20 hover:border-white/40 rounded-2xl hover:bg-white/5 backdrop-blur-sm">
                  <span className="flex items-center justify-center">
                    Book Consultation
                    <PlayCircle className="w-6 h-6 ml-3 transition-colors group-hover:text-cyan-400" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;