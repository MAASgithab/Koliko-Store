import React from 'react'
import { Card } from "flowbite-react";

export default function CardGamesComponent({ title, thumb, normalPrice, salePrice }) {
  return (
    <Card className="max-w-sm">
      <img src={thumb} alt={title} className="w-full h-48 object-cover rounded-t-lg" />

      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h5>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm text-gray-500 line-through mr-2">${normalPrice}</span>
          <span className="text-xl font-bold text-green-600">${salePrice}</span>
        </div>
        <button className="rounded-lg bg-cyan-700 px-4 py-2 text-sm text-white hover:bg-cyan-800">
          Buy
        </button>
      </div>
    </Card>
  );
}