import React, { useState, useEffect } from "react";
import CardGamesComponent from "../components/CardGamesComponent";
import bgImg from '../assets/images/gemini-3-pro-image-preview-2k_a_buatkan_background_d.png'
import PaginationComponent from "../components/PaginationComponent";
import SearchComponent from "../components/SearchComponent";

export default function ListGames() {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const onPageChange = (page) => {
    setCurrentPage(page);
    getDataGames(
      "https://www.cheapshark.com/api/1.0/deals?title=" +
        search +
        "&pageSize=8" +
        "&pageNumber=" +
        currentPage
    );
  };

  async function getDataGames(
    url = "https://www.cheapshark.com/api/1.0/deals?title=" +
      "&pageSize=8" +
      "&pageNumber=" +
      currentPage
  ) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      setGames(result);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  function processSearch(event) {
    const newSearch = event.target.value;
    setSearch(newSearch);
    setCurrentPage(1);
    getDataGames(
      "https://www.cheapshark.com/api/1.0/deals?title=" +
        newSearch +
        "&pageSize=8" +
        "&pageNumber=" +
        0
    );
  }

  useEffect(() => {
    getDataGames();
  }, [currentPage]);

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-cover bg-center min-h-screen bg-fixed"
    >
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-8">List Games</h1>
        <div className="flex justify-center mb-8">
            <SearchComponent processSearch={processSearch} />
        </div>
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
      <PaginationComponent currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  );
}
