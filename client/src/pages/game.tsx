import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type GameState = "playing" | "split" | "steal" | "both-split" | "one-steals" | "both-steal";

export default function Game() {
  const [gameState, setGameState] = useState<GameState>("playing");

  const handleSplit = () => {
    setGameState("split");
  };

  const handleSteal = () => {
    setGameState("steal");
  };

  const handleBothSplit = () => {
    setGameState("both-split");
  };

  const handleOneSteals = () => {
    setGameState("one-steals");
  };

  const handleBothSteal = () => {
    setGameState("both-steal");
  };

  const handlePlayAgain = () => {
    setGameState("playing");
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {gameState === "playing" && (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-gradient-to-br from-game-blue to-game-dark"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-game-blue to-game-dark opacity-80" />
            
            {/* Game Title */}
            <div className="relative z-10 text-center mb-16">
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              >
                SPLIT OR STEAL
              </motion.h1>
              <motion.p
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-gray-300 font-medium"
              >
                Make your choice. Trust or betray?
              </motion.p>
            </div>
            
            {/* Game Buttons Container */}
            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-4xl">
              {/* Split Button */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-1 text-center"
              >
                <motion.button
                  whileHover={{ 
                    y: -4,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
                  }}
                  whileTap={{ 
                    y: 0,
                    scale: 0.98,
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)"
                  }}
                  onClick={handleSplit}
                  className="w-full py-8 px-12 bg-gradient-to-r from-green-500 to-game-green rounded-3xl text-white font-bold text-3xl md:text-4xl uppercase tracking-wider relative overflow-hidden group shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Split</span>
                </motion.button>
                <p className="mt-4 text-gray-400 text-lg">Work together, share the reward</p>
              </motion.div>
              
              {/* Steal Button */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-1 text-center"
              >
                <motion.button
                  whileHover={{ 
                    y: -4,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
                  }}
                  whileTap={{ 
                    y: 0,
                    scale: 0.98,
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)"
                  }}
                  onClick={handleSteal}
                  className="w-full py-8 px-12 bg-gradient-to-r from-red-500 to-game-red rounded-3xl text-white font-bold text-3xl md:text-4xl uppercase tracking-wider relative overflow-hidden group shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Steal</span>
                </motion.button>
                <p className="mt-4 text-gray-400 text-lg">Take everything, risk it all</p>
              </motion.div>
            </div>
            
            {/* Game Rules */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative z-10 mt-16 text-center max-w-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBothSplit}
                  className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-3">🤝</div>
                  <p className="font-semibold mb-2">Both Split</p>
                  <p className="text-sm">You both win!</p>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOneSteals}
                  className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-3">😈</div>
                  <p className="font-semibold mb-2">One Steals</p>
                  <p className="text-sm">Stealer wins all</p>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBothSteal}
                  className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-3">💥</div>
                  <p className="font-semibold mb-2">Both Steal</p>
                  <p className="text-sm">Nobody wins</p>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {gameState === "split" && (
          <motion.div
            key="split"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-gradient-to-br from-green-400 to-game-green"
          >
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12"
              >
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-9xl mb-8"
                >
                  ✅
                </motion.div>
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-8xl md:text-9xl font-black mb-8 text-white uppercase tracking-wider"
                >
                  SPLIT!
                </motion.h1>
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-white"
                >
                  COMPLETE
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-2xl md:text-3xl text-green-100 font-medium max-w-2xl mx-auto"
                >
                  You chose to cooperate. Honor among players!
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="flex justify-center space-x-8 mb-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl"
                >
                  🎉
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="text-6xl"
                >
                  🤝
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="text-6xl"
                >
                  🎊
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <Button
                  onClick={handlePlayAgain}
                  className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white font-bold py-4 px-12 rounded-2xl text-xl uppercase tracking-wide border-2 border-white border-opacity-30 hover:border-opacity-50 transition-all duration-300"
                >
                  Play Again
                </Button>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 left-10 text-6xl opacity-60"
            >
              💚
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-20 right-20 text-6xl opacity-60"
            >
              ✨
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute bottom-20 left-20 text-6xl opacity-60"
            >
              🌟
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 3 }}
              className="absolute bottom-10 right-10 text-6xl opacity-60"
            >
              🎯
            </motion.div>
          </motion.div>
        )}

        {gameState === "steal" && (
          <motion.div
            key="steal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-gradient-to-br from-red-500 to-game-red"
          >
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12"
              >
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-9xl mb-8"
                >
                  ⚠️
                </motion.div>
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-8xl md:text-9xl font-black mb-8 text-white uppercase tracking-wider"
                >
                  STEAL!
                </motion.h1>
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-white"
                >
                  COMPLETE
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-2xl md:text-3xl text-red-100 font-medium max-w-2xl mx-auto"
                >
                  You chose betrayal. All or nothing!
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="flex justify-center space-x-8 mb-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl"
                >
                  💀
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="text-6xl"
                >
                  ⚡
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="text-6xl"
                >
                  🔥
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <Button
                  onClick={handlePlayAgain}
                  className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white font-bold py-4 px-12 rounded-2xl text-xl uppercase tracking-wide border-2 border-white border-opacity-30 hover:border-opacity-50 transition-all duration-300"
                >
                  Play Again
                </Button>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 left-10 text-6xl opacity-60"
            >
              💥
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-20 right-20 text-6xl opacity-60"
            >
              ⚡
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute bottom-20 left-20 text-6xl opacity-60"
            >
              🔥
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 3 }}
              className="absolute bottom-10 right-10 text-6xl opacity-60"
            >
              💀
            </motion.div>
          </motion.div>
        )}

        {gameState === "both-split" && (
          <motion.div
            key="both-split"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-gradient-to-br from-green-400 to-game-green"
          >
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12"
              >
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-9xl mb-8"
                >
                  🤝
                </motion.div>
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-6xl md:text-8xl font-black mb-8 text-white uppercase tracking-wider"
                >
                  BOTH SPLIT!
                </motion.h1>
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-white"
                >
                  YOU BOTH WIN!
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-2xl md:text-3xl text-green-100 font-medium max-w-2xl mx-auto"
                >
                  Trust and cooperation triumph! Share the victory!
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <Button
                  onClick={handlePlayAgain}
                  className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white font-bold py-4 px-12 rounded-2xl text-xl uppercase tracking-wide border-2 border-white border-opacity-30 hover:border-opacity-50 transition-all duration-300"
                >
                  Play Again
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {gameState === "one-steals" && (
          <motion.div
            key="one-steals"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-gradient-to-br from-orange-500 to-red-600"
          >
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12"
              >
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-9xl mb-8"
                >
                  😈
                </motion.div>
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-6xl md:text-8xl font-black mb-8 text-white uppercase tracking-wider"
                >
                  ONE STEALS!
                </motion.h1>
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-white"
                >
                  STEALER WINS ALL!
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-2xl md:text-3xl text-orange-100 font-medium max-w-2xl mx-auto"
                >
                  One player betrayed the other and takes everything!
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <Button
                  onClick={handlePlayAgain}
                  className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white font-bold py-4 px-12 rounded-2xl text-xl uppercase tracking-wide border-2 border-white border-opacity-30 hover:border-opacity-50 transition-all duration-300"
                >
                  Play Again
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {gameState === "both-steal" && (
          <motion.div
            key="both-steal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-gradient-to-br from-gray-600 to-gray-900"
          >
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12"
              >
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-9xl mb-8"
                >
                  💥
                </motion.div>
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-6xl md:text-8xl font-black mb-8 text-white uppercase tracking-wider"
                >
                  BOTH STEAL!
                </motion.h1>
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-white"
                >
                  NOBODY WINS!
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-2xl md:text-3xl text-gray-300 font-medium max-w-2xl mx-auto"
                >
                  Mutual betrayal leads to mutual destruction!
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <Button
                  onClick={handlePlayAgain}
                  className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white font-bold py-4 px-12 rounded-2xl text-xl uppercase tracking-wide border-2 border-white border-opacity-30 hover:border-opacity-50 transition-all duration-300"
                >
                  Play Again
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
