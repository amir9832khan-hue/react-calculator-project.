import React, { useState, useEffect } from 'react';
import { 
  Search, Download, Gamepad2, ChevronLeft, Star, Filter, Home, TrendingUp, Clock, MessageCircle 
} from 'lucide-react';

// --- DATA ---
const gamesData = [
  {
    id: 1,
    title: "Tekken 3",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop",
    genre: "Fighting",
    rating: 4.8,
    downloads: "2.5M",
    description: "Classic fighting game with intense 3D battles and iconic characters.",
    requirements: { os: "Win 7/8/10", ram: "128 MB", storage: "500 MB" }
  },
  {
    id: 2,
    title: "Need for Speed",
    thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=250&fit=crop",
    genre: "Racing",
    rating: 4.9,
    downloads: "3.2M",
    description: "High-speed racing with intense police chases."
  }
];

// --- COMPONENTS ---
const GameGrid = ({ games, onGameClick }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {games.map(game => (
      <div key={game.id} onClick={() => onGameClick(game)} className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-blue-500 cursor-pointer transition-all">
        <img src={game.thumbnail} className="rounded-xl mb-4 w-full h-40 object-cover" alt={game.title} />
        <h3 className="text-xl font-bold">{game.title}</h3>
        <div className="flex justify-between mt-2 text-sm text-blue-400">
          <span>{game.genre}</span>
          <span className="flex items-center"><Star className="w-3 h-3 mr-1"/>{game.rating}</span>
        </div>
      </div>
    ))}
  </div>
);

// --- MAIN APP ---
export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);

  const filteredGames = gamesData.filter(g => g.title.toLowerCase().includes(searchTerm.toLowerCase()));

  if (selectedGame) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <button onClick={() => setSelectedGame(null)} className="flex items-center text-blue-400 mb-6">
          <ChevronLeft /> Back to Home
        </button>
        <h1 className="text-4xl font-bold mb-4">{selectedGame.title}</h1>
        <img src={selectedGame.thumbnail} className="w-full max-w-2xl rounded-3xl mb-6" />
        <p className="text-xl text-gray-400 mb-8">{selectedGame.description}</p>
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-bold flex items-center gap-2">
          <Download /> Download Now
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans">
      <nav className="p-6 border-b border-white/5 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <Gamepad2 className="text-blue-500" /> GAMEVAULT
        </div>
      </nav>
      
      <div className="container mx-auto px-6 py-12">
        <div className="relative mb-12">
          <Search className="absolute left-4 top-4 text-gray-500" />
          <input 
            className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-blue-500"
            placeholder="Search games..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <GameGrid games={filteredGames} onGameClick={setSelectedGame} />
      </div>
    </div>
  );
}
