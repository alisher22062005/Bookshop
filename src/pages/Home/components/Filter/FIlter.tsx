import { useEffect, useState } from "react";
import BookCard from "../../../../shared/BookCard";
import { Link } from "react-router-dom";
// import Pagination from "@mui/material/Pagination";
import type { Book } from "../../../../interfaces/Interfaces";
import apiService from "../../../../service/apiService/apiService";
import NotFoundBook from "../NotFoundBook/NotFoundBook";
import { auth } from "../../../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Filter({ foundBooks }: { foundBooks: Book[] }) {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentGenre, setCurrentGenre] = useState("Science");
  const genres = ["Science", "Romance", "Mystery", "Fantasy", "History"];
  const [found, setFound] = useState<boolean | null>(null);
  const [search, setSearch] = useState(false);
  const [favourites, setFavourites] = useState<Book[]>([]);

  useEffect(() => {
    if (favourites?.length > 0)
      localStorage.setItem("books", JSON.stringify(favourites));
  }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user)
        localStorage.setItem(user.email || "", JSON.stringify(favourites));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (favourites?.length > 0)
      localStorage.setItem("books", JSON.stringify(favourites));
  }, []);

  useEffect(() => {
    console.log("FOUND_BOOKS", foundBooks);
    if (foundBooks.length > 0) setFound(true);
    else if (!search && foundBooks.length == 0) {
      setFound(null);
      setSearch(true);
    } else setFound(false);
  }, [foundBooks]);

  useEffect(() => {
    apiService({ genre: currentGenre.toLowerCase() }).then((res) => {
      console.log("RES", res);
      setBooks(res);
    });
  }, [currentGenre]);

  useEffect(() => {
    console.log("CurrentGnre", currentGenre);
  }, [currentGenre]);

  useEffect(() => {
    console.log("Books", books);
  }, [books]);
  useEffect(() => {
    console.log("Found", found);
  }, [found]);

  return (
    <>
      <div className="flex flex-col pt-[3%] justify-center pl-[5%]  gap-[3rem] pb-[3%]">
        <div className="flex flex-col gap-[1rem] ">
          <div className="text-[1.2rem]">Filter by Genre</div>
          <div className="flex gap-[1rem]">
            {genres.map((genre, index) => (
              <button
                onClick={() => {
                  setCurrentGenre(genre);
                  setFound(null);
                }}
                className={`p-[0.5rem] px-[1rem] font-semibold border-[1px] border-gray-300  rounded-[0.5rem] ${
                  currentGenre == genre
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
                key={index}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        <div className="flex ">
          {found == null && (
            <div className="flex gap-[2rem] justify-center flex-wrap ">
              {books?.map((book, index) => (
                <Link key={index} to={`/books/${book.id}`}>
                  <BookCard
                    image={book.image}
                    title={book.title}
                    author={book.author}
                    describe={book.describe}
                    key={index}
                  />
                </Link>
              ))}
            </div>
          )}
          {found && (
            <div className="flex gap-[2rem] justify-center flex-wrap ">
              {foundBooks?.map((book, index) => (
                <Link key={index} to={`/books/${book.id}`}>
                  <BookCard
                    image={book.image}
                    title={book.title}
                    author={book.author}
                    describe={book.describe}
                    key={index}
                  />
                </Link>
              ))}
            </div>
          )}
          {found == false && (
            <div className="flex gap-[2rem] justify-center flex-wrap w-full ">
              <NotFoundBook />
            </div>
          )}
        </div>
        {/* <div className="flex w-full justify-end pr-[3rem]">
          {" "}
          <Pagination count={3} variant="outlined" shape="rounded" />
        </div> */}
      </div>
    </>
  );
}
