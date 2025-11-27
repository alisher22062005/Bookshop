import { useEffect, useState } from "react";
import BookCard from "../../../../shared/BookCard";
// import apiService from "../../../../service/apiService/apiService";
import type { AppDispatch } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";
import { fetchBooks } from "../../../../features/dataSlice";
export default function Filter() {
  interface Book {
    title: string;
    describe: string;
    author: string;
    image: string;
  }

  const [books, setBooks] = useState<Book[]>([]);
  const [currentGenre, setCurrentGenre] = useState("Romance");
  const genres = ["Science", "Romance", "Mystery", "Fantasy", "History"];

  const dispatch = useDispatch<AppDispatch>();
  const { list } = useSelector((state: RootState) => state.booksReducer);
  useEffect(() => {
    dispatch(fetchBooks({ genre: currentGenre }));
  }, [currentGenre]);

  useEffect(() => {
    setBooks(list);
  }, [list]);
  console.log("List", list);

  // useEffect(() => {
  //   apiService({ genre: currentGenre.toLowerCase() }).then((res) =>
  //     setBooks(res)
  //   );
  // }, [currentGenre]);

  // useEffect(() => {
  //   console.log("CurrentGnre", currentGenre);
  // }, [currentGenre]);

  // useEffect(() => {
  //   console.log("Books", books);
  // }, [books]);

  return (
    <>
      <div className="flex flex-col pt-[3%] justify-center pl-[5%]  gap-[3rem]">
        <div className="flex flex-col gap-[1rem] ">
          <div className="text-[1.2rem]">Filter by Genre</div>
          <div className="flex gap-[1rem]">
            {genres.map((genre, index) => (
              <button
                onClick={() => setCurrentGenre(genre)}
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
          <div className="flex gap-[2rem] justify-center flex-wrap ">
            {books?.map((book, index) => (
              <BookCard
                image={book.image}
                title={book.title}
                author={book.author}
                describe={book.describe}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
