import React, { useState, useEffect } from "react";
import CardGamesComponent from "../components/CardGamesComponent";
import bgImg from '../assets/images/gemini-3-pro-image-preview-2k_a_buatkan_background_d.png'

export default function ListGames() {
  const [games, setGames] = useState([]);

  async function getDataGames() {
    const url = "https://www.cheapshark.com/api/1.0/deals?pageSize=8";
    try {
      const response = await fetch(url);
      const result = await response.json();
      setGames(result);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getDataGames();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-cover bg-center min-h-screen bg-fixed"
    >
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-8">List Games</h1>

        <div className="flex flex-wrap gap-6 justify-center">
          {games.map((game, index) => (
            <CardGamesComponent
              key={index}
              title={game.title}
              thumb={game.thumb}
              normalPrice={game.normalPrice}
              salePrice={game.salePrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
