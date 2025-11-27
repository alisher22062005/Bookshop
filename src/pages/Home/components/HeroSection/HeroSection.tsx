import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
export default function HeroSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  useEffect(() => {
    if (query.length == 0) setSearchParams({});
    console.log(query);
  }, [query]);

  function handleClick() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&maxResults=5`
      )
      .then((res) => console.log("Clicked data", res.data.items[0].volumeInfo))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[3rem] pt-[3%] ">
        <div className="flex flex-col gap-[1.5rem] items-center justify-center">
          <div className="text-[1.5rem] font-bold max-[60%]">
            Discover Your Next Great Read
          </div>
          <div className="max-w-[50%] text-[1.2rem] text-center text-gray-500">
            Browse through our extensive collection of books across various
            genres. Find the perfect book for your reading journey.
          </div>
        </div>

        <div className="w-[800px] flex gap-[2rem] ">
          <input
            onChange={(e) => setSearchParams({ q: e.target.value })}
            value={query}
            className="w-full p-[0.5rem] rounded-[0.5rem] border-[1px] border-gray-300"
            placeholder="Search by title or author..."
          ></input>
          <button onClick={handleClick}>Click me</button>
        </div>
      </div>
    </>
  );
}
