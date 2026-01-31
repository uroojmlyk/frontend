






// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Star, Clock, User, Filter, Grid, List, ChevronRight, Search, TrendingUp, BookOpen } from 'lucide-react';
// import Spinner from "../components/Spinner";

// function Courses() {
//   const [courses, setCourses] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [viewMode, setViewMode] = useState('grid');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   useEffect(() => {
//     // Apply both category and search filters
//     let filtered = courses;
    
//     // Apply category filter
//     if (selectedCategory !== 'all') {
//       filtered = filtered.filter(course => 
//         course.title.toLowerCase().includes(selectedCategory) ||
//         course.category?.toLowerCase().includes(selectedCategory)
//       );
//     }
    
//     // Apply search filter
//     if (searchQuery.trim() !== '') {
//       filtered = filtered.filter(course =>
//         course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
    
//     setFilteredCourses(filtered);
//   }, [courses, selectedCategory, searchQuery]);

//   const fetchCourses = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/courses");
//       const result = await response.json();
      
//       if (result.success && result.data) {
//         setCourses(result.data);
//         setFilteredCourses(result.data);
//       } else {
//         setCourses([]);
//         setFilteredCourses([]);
//       }
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//     }
//   };

//   const categories = [
//     { id: 'all', name: 'All Courses', icon: '📚', count: courses.length },
//     { id: 'react', name: 'React', icon: '⚛️', count: courses.filter(c => c.title.toLowerCase().includes('react')).length },
//     { id: 'javascript', name: 'JavaScript', icon: '📜', count: courses.filter(c => c.title.toLowerCase().includes('javascript')).length },
//     { id: 'node', name: 'Node.js', icon: '🚀', count: courses.filter(c => c.title.toLowerCase().includes('node')).length },
//     { id: 'tailwind', name: 'Tailwind', icon: '🎨', count: courses.filter(c => c.title.toLowerCase().includes('tailwind')).length },
//     { id: 'typescript', name: 'TypeScript', icon: '📘', count: courses.filter(c => c.title.toLowerCase().includes('typescript')).length },
//     { id: 'full-stack', name: 'Full Stack', icon: '💻', count: courses.filter(c => c.title.toLowerCase().includes('full-stack')).length },
//   ];

//   if (loading) return <Spinner />;

//   return (
//     <div className="min-h-screen overflow-x-hidden text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black">
//       {/* Premium Hero Section */}
//       <section className="relative overflow-hidden">
//         {/* Dark Wallpaper Background */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070')] bg-cover bg-center bg-no-repeat"></div>
//           <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95"></div>
          
//           {/* Animated Elements */}
//           <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-600/10 to-emerald-600/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="container relative z-10 px-4 py-24 mx-auto">
//           <div className="max-w-6xl mx-auto">
//             <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
//               <div className="lg:w-2/3">
//                 {/* Premium Badge */}
//                 <div className="inline-flex items-center px-8 py-3 mb-8 space-x-3 border shadow-2xl backdrop-blur-xl bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-2xl border-white/20 shadow-purple-500/20">
//                   <BookOpen className="w-6 h-6 text-cyan-300" />
//                   <span className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
//                     All Courses Collection
//                   </span>
//                   <TrendingUp className="w-6 h-6 text-yellow-300" />
//                 </div>
                
//                 <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
//                   <span className="text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text">
//                     Explore All
//                   </span>
//                   <br />
//                   <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text">
//                     Premium Courses
//                   </span>
//                 </h1>
                
//                 <p className="max-w-3xl mb-10 text-xl leading-relaxed text-gray-300">
//                   Browse our complete catalog of expert-led courses. From beginner to advanced, 
//                   find the perfect course to accelerate your career growth.
//                 </p>
                
//                 {/* Quick Stats */}
//                 <div className="flex flex-wrap gap-6 mb-8">
//                   <div className="p-6 border backdrop-blur-xl bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-2xl border-blue-500/30">
//                     <div className="flex items-center space-x-4">
//                       <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
//                         <span className="text-2xl">📚</span>
//                       </div>
//                       <div>
//                         <div className="text-2xl font-bold">{courses.length}</div>
//                         <div className="text-sm text-gray-300">Total Courses</div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="p-6 border backdrop-blur-xl bg-gradient-to-br from-purple-900/40 to-pink-800/20 rounded-2xl border-purple-500/30">
//                     <div className="flex items-center space-x-4">
//                       <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
//                         <TrendingUp className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <div className="text-2xl font-bold">4.9</div>
//                         <div className="text-sm text-gray-300">Avg Rating</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="lg:w-1/3">
//                 <div className="p-8 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border-white/10">
//                   <h3 className="flex items-center mb-6 text-xl font-bold text-white">
//                     <Search className="w-5 h-5 mr-2 text-cyan-300" />
//                     Search Courses
//                   </h3>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="Search by title, instructor..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className="w-full py-4 pl-12 pr-4 text-white placeholder-gray-400 transition-all duration-300 border backdrop-blur-md bg-white/5 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent hover:border-white/20"
//                     />
//                     <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="container px-4 py-12 mx-auto">
//         <div className="mx-auto max-w-7xl">
//           {/* Categories Filter */}
//           <div className="mb-12">
//             <h2 className="flex items-center mb-6 text-2xl font-bold text-white">
//               <span className="w-2 h-2 mr-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></span>
//               Browse by Category
//             </h2>
//             <div className="flex flex-wrap gap-3">
//               {categories.map(category => (
//                 <button
//                   key={category.id}
//                   onClick={() => setSelectedCategory(category.id)}
//                   className={`group flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
//                     selectedCategory === category.id
//                       ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40'
//                       : 'backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-gray-300 hover:text-white border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10'
//                   }`}
//                 >
//                   <span className="text-xl">{category.icon}</span>
//                   <span>{category.name}</span>
//                   <span className={`text-sm px-2 py-1 rounded-full ${
//                     selectedCategory === category.id
//                       ? 'bg-white/20'
//                       : 'bg-white/10'
//                   }`}>
//                     {category.count}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Controls Bar */}
//           <div className="p-8 mb-10 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border-white/10">
//             <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
//               <div>
//                 <h3 className="text-2xl font-bold text-white">
//                   {selectedCategory === 'all' 
//                     ? `All Courses (${filteredCourses.length})`
//                     : `"${categories.find(c => c.id === selectedCategory)?.name}" Courses (${filteredCourses.length})`
//                   }
//                 </h3>
//                 {searchQuery && (
//                   <p className="mt-2 text-gray-400">
//                     Search results for "{searchQuery}"
//                   </p>
//                 )}
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center space-x-2">
//                   <span className="text-gray-400">View:</span>
//                   <button
//                     onClick={() => setViewMode('grid')}
//                     className={`p-3 rounded-xl transition-all duration-300 ${
//                       viewMode === 'grid'
//                         ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40'
//                         : 'backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 hover:shadow-lg'
//                     }`}
//                   >
//                     <Grid className="w-5 h-5" />
//                   </button>
//                   <button
//                     onClick={() => setViewMode('list')}
//                     className={`p-3 rounded-xl transition-all duration-300 ${
//                       viewMode === 'list'
//                         ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40'
//                         : 'backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 hover:shadow-lg'
//                     }`}
//                   >
//                     <List className="w-5 h-5" />
//                   </button>
//                 </div>
//                 <button className="flex items-center space-x-2 px-5 py-2.5 backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-gray-700/50 hover:to-gray-800/50 rounded-xl font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg">
//                   <Filter className="w-4 h-4" />
//                   <span>Filters</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Courses Grid/List */}
//           {filteredCourses.length === 0 ? (
//             <div className="py-20 text-center">
//               <div className="flex items-center justify-center w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50">
//                 <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                 </svg>
//               </div>
//               <h3 className="mb-4 text-3xl font-bold text-white">
//                 {searchQuery ? `No courses found for "${searchQuery}"` : "No courses available"}
//               </h3>
//               <p className="mb-8 text-lg text-gray-400">
//                 {searchQuery ? "Try a different search term" : "Check back later for new courses"}
//               </p>
//               {(searchQuery || selectedCategory !== 'all') && (
//                 <button
//                   onClick={() => {
//                     setSearchQuery('');
//                     setSelectedCategory('all');
//                   }}
//                   className="px-8 py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1"
//                 >
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           ) : viewMode === 'grid' ? (
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {filteredCourses.map(course => (
//                 <div key={course.id || course._id} className="relative group">
//                   <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:opacity-100"></div>
                  
//                   <div className="relative h-full overflow-hidden transition-all duration-500 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border-white/10 hover:border-white/20 group-hover:-translate-y-2">
//                     {/* Image Container */}
//                     <div className="relative h-56 overflow-hidden">
//                       <img 
//                         src={course.image} 
//                         alt={course.title}
//                         className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
//                       {/* Badges */}
//                       <div className="absolute flex gap-2 top-4 left-4">
//                         <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
//                           Popular
//                         </span>
//                       </div>
                      
//                       {/* Price */}
//                       <div className="absolute px-4 py-2 text-lg font-bold text-white border shadow-2xl bottom-4 right-4 backdrop-blur-xl bg-gradient-to-r from-black/80 to-gray-900/80 rounded-xl border-white/10">
//                         ${course.price}
//                       </div>
//                     </div>
                    
//                     {/* Content */}
//                     <div className="p-6">
//                       <div className="flex items-center justify-between mb-4">
//                         <div className="flex items-center space-x-3">
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
//                       <div className="flex items-center p-3 mb-6 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border-white/5">
//                         <div className="flex items-center justify-center w-10 h-10 mr-3 font-bold text-white bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
//                           {course.instructor.charAt(0)}
//                         </div>
//                         <div>
//                           <div className="font-semibold text-white">{course.instructor}</div>
//                           <div className="text-sm text-gray-400">Lead Instructor</div>
//                         </div>
//                       </div>
                      
//                       {/* Action Buttons */}
//                       <div className="flex space-x-3">
//                         <Link
//                           to={`/courses/${course.id || course._id}`}
//                           className="flex-1 px-6 py-3 font-semibold text-center text-white transition-all duration-300 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl hover:from-gray-700/50 hover:to-gray-800/50 border-white/10 hover:border-white/20 hover:shadow-lg"
//                         >
//                           View Details
//                         </Link>
//                         <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30 border border-cyan-500/30">
//                           Enroll Now
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="space-y-6">
//               {filteredCourses.map(course => (
//                 <div key={course.id || course._id} className="overflow-hidden transition-all duration-500 border group backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border-white/10 hover:border-white/20">
//                   <div className="flex flex-col md:flex-row">
//                     <div className="relative overflow-hidden md:w-1/3 min-h-64">
//                       <img 
//                         src={course.image} 
//                         alt={course.title}
//                         className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
//                       <div className="absolute px-4 py-2 font-bold text-white border shadow-xl bottom-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl border-white/10">
//                         ${course.price}
//                       </div>
//                     </div>
                    
//                     <div className="p-8 md:w-2/3">
//                       <div className="flex flex-col justify-between mb-4 md:flex-row md:items-center">
//                         <div className="flex items-center mb-4 space-x-4 md:mb-0">
//                           <span className="text-sm text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-full">
//                             {course.duration}
//                           </span>
//                           <div className="flex items-center bg-yellow-500/10 text-yellow-300 px-3 py-1.5 rounded-full">
//                             <Star className="w-4 h-4 mr-1 fill-current" />
//                             <span className="font-bold">{course.rating}</span>
//                           </div>
//                         </div>
//                       </div>

//                       <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
//                         {course.title}
//                       </h3>
//                       <p className="mb-6 leading-relaxed text-gray-400">
//                         {course.description}
//                       </p>

//                       <div className="flex flex-col justify-between md:flex-row md:items-center">
//                         <div className="flex items-center mb-4 md:mb-0">
//                           <div className="flex items-center justify-center w-10 h-10 mr-3 font-bold text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
//                             {course.instructor.charAt(0)}
//                           </div>
//                           <div>
//                             <div className="font-semibold text-white">{course.instructor}</div>
//                             <div className="text-sm text-gray-400">Industry Expert</div>
//                           </div>
//                         </div>

//                         <div className="flex space-x-3">
//                           <Link
//                             to={`/courses/${course.id || course._id}`}
//                             className="px-6 py-3 font-semibold text-white transition-all duration-300 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl hover:from-gray-700/50 hover:to-gray-800/50 border-white/10 hover:border-white/20 hover:shadow-lg"
//                           >
//                             View Details
//                           </Link>
//                           <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30 border border-cyan-500/30">
//                             Add to Cart
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Load More / Pagination */}
//           {filteredCourses.length > 0 && (
//             <div className="mt-16 text-center">
//               <button className="inline-flex items-center px-10 py-4 font-bold text-white transition-all duration-300 border group backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-white/10 hover:border-white/30 rounded-xl hover:shadow-xl hover:shadow-white/10">
//                 Load More Courses
//                 <ChevronRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Courses;



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, Clock, User, Filter, Grid, List, ChevronRight, Search, TrendingUp, BookOpen } from 'lucide-react';
import Spinner from "../components/Spinner";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    // Apply both category and search filters
    let filtered = courses;
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(selectedCategory) ||
        course.category?.toLowerCase().includes(selectedCategory)
      );
    }
    
    // Apply search filter
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredCourses(filtered);
  }, [courses, selectedCategory, searchQuery]);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/courses");
      const result = await response.json();
      
      if (result.success && result.data) {
        setCourses(result.data);
        setFilteredCourses(result.data);
      } else {
        setCourses([]);
        setFilteredCourses([]);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', name: 'All Courses', icon: '📚', count: courses.length },
    { id: 'react', name: 'React', icon: '⚛️', count: courses.filter(c => c.title.toLowerCase().includes('react')).length },
    { id: 'javascript', name: 'JavaScript', icon: '📜', count: courses.filter(c => c.title.toLowerCase().includes('javascript')).length },
    { id: 'node', name: 'Node.js', icon: '🚀', count: courses.filter(c => c.title.toLowerCase().includes('node')).length },
    { id: 'tailwind', name: 'Tailwind', icon: '🎨', count: courses.filter(c => c.title.toLowerCase().includes('tailwind')).length },
    { id: 'typescript', name: 'TypeScript', icon: '📘', count: courses.filter(c => c.title.toLowerCase().includes('typescript')).length },
    { id: 'full-stack', name: 'Full Stack', icon: '💻', count: courses.filter(c => c.title.toLowerCase().includes('full-stack')).length },
  ];

  if (loading) return <Spinner />;

  return (
    <div className="min-h-screen overflow-x-hidden text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden">
        {/* Dark Wallpaper Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95"></div>
          
          {/* Animated Elements */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-600/10 to-emerald-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-4 py-24 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              <div className="lg:w-2/3">
                {/* Premium Badge */}
                <div className="inline-flex items-center px-8 py-3 mb-8 space-x-3 border shadow-2xl backdrop-blur-xl bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-2xl border-white/20 shadow-purple-500/20">
                  <BookOpen className="w-6 h-6 text-cyan-300" />
                  <span className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
                    All Courses Collection
                  </span>
                  <TrendingUp className="w-6 h-6 text-yellow-300" />
                </div>
                
                <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
                  <span className="text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text">
                    Explore All
                  </span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text">
                    Premium Courses
                  </span>
                </h1>
                
                <p className="max-w-3xl mb-10 text-xl leading-relaxed text-gray-300">
                  Browse our complete catalog of expert-led courses. From beginner to advanced, 
                  find the perfect course to accelerate your career growth.
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="p-6 border backdrop-blur-xl bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-2xl border-blue-500/30">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                        <span className="text-2xl">📚</span>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{courses.length}</div>
                        <div className="text-sm text-gray-300">Total Courses</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border backdrop-blur-xl bg-gradient-to-br from-purple-900/40 to-pink-800/20 rounded-2xl border-purple-500/30">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">4.9</div>
                        <div className="text-sm text-gray-300">Avg Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                {/* Right Side Image Section Added Here */}
                <div className="relative mb-8 overflow-hidden rounded-3xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop"
                    alt="Students learning"
                    className="object-cover w-full h-48 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-sm font-semibold text-white">Join 50K+ Students</div>
                    <div className="text-xs text-gray-300">Start your journey today</div>
                  </div>
                </div>
                
                <div className="p-8 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border-white/10">
                  <h3 className="flex items-center mb-6 text-xl font-bold text-white">
                    <Search className="w-5 h-5 mr-2 text-cyan-300" />
                    Search Courses
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by title, instructor..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full py-4 pl-12 pr-4 text-white placeholder-gray-400 transition-all duration-300 border backdrop-blur-md bg-white/5 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent hover:border-white/20"
                    />
                    <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the code remains exactly the same... */}
      {/* Main Content */}
      <div className="container px-4 py-12 mx-auto">
        <div className="mx-auto max-w-7xl">
          {/* Categories Filter */}
          <div className="mb-12">
            <h2 className="flex items-center mb-6 text-2xl font-bold text-white">
              <span className="w-2 h-2 mr-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></span>
              Browse by Category
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40'
                      : 'backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-gray-300 hover:text-white border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-white/10'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Controls Bar */}
          <div className="p-8 mb-10 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border-white/10">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedCategory === 'all' 
                    ? `All Courses (${filteredCourses.length})`
                    : `"${categories.find(c => c.id === selectedCategory)?.name}" Courses (${filteredCourses.length})`
                  }
                </h3>
                {searchQuery && (
                  <p className="mt-2 text-gray-400">
                    Search results for "{searchQuery}"
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">View:</span>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      viewMode === 'grid'
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40'
                        : 'backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 hover:shadow-lg'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      viewMode === 'list'
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40'
                        : 'backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 hover:shadow-lg'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
                <button className="flex items-center space-x-2 px-5 py-2.5 backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-gray-700/50 hover:to-gray-800/50 rounded-xl font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg">
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Courses Grid/List */}
          {filteredCourses.length === 0 ? (
            <div className="py-20 text-center">
              <div className="flex items-center justify-center w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-3xl font-bold text-white">
                {searchQuery ? `No courses found for "${searchQuery}"` : "No courses available"}
              </h3>
              <p className="mb-8 text-lg text-gray-400">
                {searchQuery ? "Try a different search term" : "Check back later for new courses"}
              </p>
              {(searchQuery || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-8 py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1"
                >
                  Reset Filters
                </button>
              )}
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map(course => (
                <div key={course.id || course._id} className="relative group">
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:opacity-100"></div>
                  
                  <div className="relative h-full overflow-hidden transition-all duration-500 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border-white/10 hover:border-white/20 group-hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Badges */}
                      <div className="absolute flex gap-2 top-4 left-4">
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                          Popular
                        </span>
                      </div>
                      
                      {/* Price */}
                      <div className="absolute px-4 py-2 text-lg font-bold text-white border shadow-2xl bottom-4 right-4 backdrop-blur-xl bg-gradient-to-r from-black/80 to-gray-900/80 rounded-xl border-white/10">
                        ${course.price}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center text-sm text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-full">
                            <Clock className="w-4 h-4 mr-2" />
                            {course.duration}
                          </span>
                          <div className="flex items-center bg-yellow-500/10 text-yellow-300 px-3 py-1.5 rounded-full">
                            <Star className="w-4 h-4 mr-2 fill-current" />
                            <span className="font-bold">{course.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-cyan-300 line-clamp-1">
                        {course.title}
                      </h3>
                      
                      <p className="mb-5 leading-relaxed text-gray-400 line-clamp-2">
                        {course.description}
                      </p>
                      
                      {/* Instructor */}
                      <div className="flex items-center p-3 mb-6 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border-white/5">
                        <div className="flex items-center justify-center w-10 h-10 mr-3 font-bold text-white bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                          {course.instructor.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{course.instructor}</div>
                          <div className="text-sm text-gray-400">Lead Instructor</div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <Link
                          to={`/courses/${course.id || course._id}`}
                          className="flex-1 px-6 py-3 font-semibold text-center text-white transition-all duration-300 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl hover:from-gray-700/50 hover:to-gray-800/50 border-white/10 hover:border-white/20 hover:shadow-lg"
                        >
                          View Details
                        </Link>
                        <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30 border border-cyan-500/30">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredCourses.map(course => (
                <div key={course.id || course._id} className="overflow-hidden transition-all duration-500 border group backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border-white/10 hover:border-white/20">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative overflow-hidden md:w-1/3 min-h-64">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                      <div className="absolute px-4 py-2 font-bold text-white border shadow-xl bottom-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl border-white/10">
                        ${course.price}
                      </div>
                    </div>
                    
                    <div className="p-8 md:w-2/3">
                      <div className="flex flex-col justify-between mb-4 md:flex-row md:items-center">
                        <div className="flex items-center mb-4 space-x-4 md:mb-0">
                          <span className="text-sm text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-full">
                            {course.duration}
                          </span>
                          <div className="flex items-center bg-yellow-500/10 text-yellow-300 px-3 py-1.5 rounded-full">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            <span className="font-bold">{course.rating}</span>
                          </div>
                        </div>
                      </div>

                      <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                        {course.title}
                      </h3>
                      <p className="mb-6 leading-relaxed text-gray-400">
                        {course.description}
                      </p>

                      <div className="flex flex-col justify-between md:flex-row md:items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                          <div className="flex items-center justify-center w-10 h-10 mr-3 font-bold text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                            {course.instructor.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-white">{course.instructor}</div>
                            <div className="text-sm text-gray-400">Industry Expert</div>
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <Link
                            to={`/courses/${course.id || course._id}`}
                            className="px-6 py-3 font-semibold text-white transition-all duration-300 border backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl hover:from-gray-700/50 hover:to-gray-800/50 border-white/10 hover:border-white/20 hover:shadow-lg"
                          >
                            View Details
                          </Link>
                          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30 border border-cyan-500/30">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More / Pagination */}
          {filteredCourses.length > 0 && (
            <div className="mt-16 text-center">
              <button className="inline-flex items-center px-10 py-4 font-bold text-white transition-all duration-300 border group backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-white/10 hover:border-white/30 rounded-xl hover:shadow-xl hover:shadow-white/10">
                Load More Courses
                <ChevronRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;