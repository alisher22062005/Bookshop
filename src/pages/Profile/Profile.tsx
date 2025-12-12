import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import BookCard from "../../shared/BookCard";
import { type Book } from "../../interfaces/Interfaces";
export default function Profile() {
  const [userEmail, setUserEmail] = useState<String>("");
  const [favorites, setFavorites] = useState<Book[]>([]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUserEmail(user.email || "");
        console.log("USER:", user);
      } else {
        console.log("No user signed in");
      }
    });

    return () => unsubscribe(); // cleanup
  }, []);

  useEffect(() => {
    const favor = JSON.parse(localStorage.getItem("books") || "[]");
    setFavorites(favor);
  }, []);

  useEffect(() => {
    console.log("Favourites", favorites);
    // localStorage.setItem("books", JSON.stringify(favorites));
  }, [favorites]);

  function removeBook(title: string) {
    const removeBook = favorites?.filter((book) => book.title != title);
    localStorage.setItem("books", JSON.stringify(removeBook));
    setFavorites(removeBook);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-[400px] gap-[2rem] pt-[5%]">
        {/* PROFILE CARD */}
        <div className="flex items-center  bg-red-300 w-[80%] p-4 rounded-xl gap-[2rem]">
          <div className=" w-[150px] h-[150px] flex-shrink-0 rounded-full bg-blue-600 flex justify-center items-center text-[5.5rem] text-white ">
            {userEmail.trim()[0]}
          </div>

          <div className="flex flex-col gap-1 text-white">
            <div className="text-xl font-bold">User</div>
            <div className="text-lg">{userEmail}</div>
          </div>
        </div>

        {/* FAVOURITES SECTION */}
        <div className="flex flex-col w-full pl-[10%] gap-[3rem]">
          <div className="text-[2rem] font-semibold">Favourites</div>

          <div className="flex gap-[2rem] flex-wrap justify-start">
            {favorites?.map((item, index) => (
              <div key={index} onClick={() => removeBook(item.title)}>
                {" "}
                <BookCard
                  title={item.title}
                  describe={item.describe}
                  author={item.author}
                  image={item.image}
                  // key={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
