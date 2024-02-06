// @ts-nocheck
"use client";
import Banner from "@/components/Banner";
import React, { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600">{count}</h1>
      <div className="mt-4 space-x-4">
        <button
          onClick={increment}
          className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          Add+1
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Seubstract-1
        </button>
      </div>
      <Banner value={count} />
    </div>
  );
}
