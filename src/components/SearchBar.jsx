// 



import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
      <input
        type="text"
        placeholder="Search courses by title..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full py-4 pl-12 pr-4 text-white placeholder-gray-400 transition-all duration-300 border bg-white/5 backdrop-blur-md border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent hover:border-white/20"
      />
    </div>
  );
};

export default SearchBar;