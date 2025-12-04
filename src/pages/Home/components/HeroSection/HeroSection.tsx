import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { apiServiceSearch } from "../../../../service/apiService/apiService";
import type { Book } from "../../../../interfaces/Interfaces";
import Filter from "../Filter/FIlter";
// import axios from "axios";
export default function HeroSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [previos, setPrevios] = useState("");
  const [foundBooks, setFoundBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (query.length == 0) setSearchParams({});
    console.log(query);
  }, [query]);

  useEffect(() => {
    console.log("FoundBooks:", foundBooks);
  }, [foundBooks]);

  // debounce and switch logic
  useEffect(() => {
    if (previos == query) {
      console.log("Previos:", previos);
      return;
    }
    if (query.length > 0) {
      const timeout = setTimeout(() => {
        apiServiceSearch({ title: query }).then((res) => {
          console.log("Search", res);
          setFoundBooks(res);
        });
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [query]);

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
        </div>
      </div>
      <Filter foundBooks={foundBooks} />
    </>
  );
}
