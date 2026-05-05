import React, { useState } from 'react';
import { Search, Download, Gamepad2, Star, Home, TrendingUp, Play } from 'lucide-react';

const gamesData = [
  {
    id: 1,
    title: "Tekken 3",
    thumbnail: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=1000",
    genre: "Fighting",
    rating: 4.8,
    downloads: "2.5M",
    description: "The classic king of iron fist tournament. Experience the legendary fighting game on your PC."
  },
  {
    id: 2,
    title: "Need for Speed: Most Wanted",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000",
    genre: "Racing",
    rating: 4.9,
    downloads: "3.2M",
    description: "Outrun the police and climb the blacklist in the most iconic street racing game ever."
  },
  {
    id: 3,
    title: "GTA: Vice City",
    thumbnail: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?q=80&w=1000",
    genre: "Open World",
    rating: 4.7,
    downloads: "5M",
    description: "Welcome to the 80s. From the decade of big hair and pastel suits comes the story of one man's rise."
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = gamesData.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="text-cyan-400 w-8 h-8" />
            <span className="text-xl font-bold tracking-tighter">GAME<span className="text-cyan-400">VAULT</span></span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><Home size={18}/> Home</a>
            <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><TrendingUp size={18}/> Trending</a>
          </div>

          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text"
              placeholder="Search games..."
              className="w-full bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-cyan-500 transition-all outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Banner"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">UNLEASH THE <span className="text-cyan-400">GAMER</span></h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">Download the most iconic PC games from our curated collection. High speed, no ads, just gaming.</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Play className="fill-cyan-400 text-cyan-400" size={24} /> Popular Downloads
          </h2>
          <span className="text-sm text-cyan-400 font-semibold cursor-pointer hover:underline">View All</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <div key={game.id} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-2 duration-300 shadow-2xl shadow-black">
              <div className="relative h-48">
                <img src={game.thumbnail} alt={game.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold border border-white/10">
                  <Star className="text-yellow-400 fill-yellow-400" size={12} /> {game.rating}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{game.title}</h3>
                  <span className="text-[10px] uppercase tracking-widest bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded font-bold">{game.genre}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">{game.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="text-xs text-slate-500 font-medium">
                    <span className="text-slate-300">{game.downloads}</span> Downloads
                  </div>
                  <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-cyan-500/20">
                    <Download size={16} /> Download
                  </button
