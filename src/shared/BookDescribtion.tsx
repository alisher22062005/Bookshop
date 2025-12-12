import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { type BookDescription } from "../interfaces/Interfaces";
import { apiServiceID } from "../service/apiService/apiService";
import defaultImage from "../assets/channels4_profile.jpg";
import Button from "@mui/material/Button";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
export default function BookDescribtion() {
  const { id } = useParams<string>();
  const [bookData, setBookData] = useState<BookDescription>();
  const [isAdd, setIsAdd] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const book = {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    rating: 4.5,
    genre: "Finance & Psychology",
    pages: 256,
    year: 2020,
    price: "$24.99",
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      console.log("EMAIL", email);
      if (user) {
        setIsLogin(true);
        setEmail(user?.email || "");
      }
    });
    return subscribe;
  }, []);

  useEffect(() => {
    console.log(id);
    id
      ? apiServiceID({ id: id })
          .then((res) => {
            setBookData(res);
            console.log("RES", res);
          })
          .catch(() => console.log("ERROR"))
      : "";
  }, [id]);

  function addFavourite() {
    if (email == "") {
      navigate("/logIn");
      return;
    }
    if (isLogin) {
      if (!isAdd) {
        const book = {
          title: bookData?.title,
          describe: bookData?.describe,
          author: bookData?.author,
          image: bookData?.image,
        };
        let storeBooks = JSON.parse(localStorage.getItem("books") || "[]");
        storeBooks = [...storeBooks, book];

        localStorage.setItem("books", JSON.stringify(storeBooks));
        setIsAdd(true);
      } else {
        let storeBooks = JSON.parse(localStorage.getItem("books") || "[]");
        storeBooks = storeBooks.filter(
          (item: any) => item.title != bookData?.title
        );

        localStorage.setItem("books", JSON.stringify(storeBooks));
        setIsAdd(false);
      }
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Book Cover */}
        <div className="h-56 flex items-center justify-center">
          <img
            className=" w-full h-full object-cover object-center "
            src={bookData?.image ? `${bookData.image}` : defaultImage}
            alt="Image"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Title */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                Title
              </p>
              <p className="text-lg font-bold text-gray-900">
                {bookData?.title}
              </p>
            </div>

            {/* Author */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                Author
              </p>
              <p className="text-gray-900 font-medium">
                {bookData?.author?.[0] ?? "Author"}
              </p>
            </div>

            {/* Rating */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                Rating
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(book.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">
                  {book.rating}
                </span>
              </div>
            </div>

            {/* Genre */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                Genre
              </p>
              <p className="text-gray-900 font-medium">
                {bookData?.categories}
              </p>
            </div>

            {/* Pages */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                Pages
              </p>
              <p className="text-gray-900 font-medium">{bookData?.pageCount}</p>
            </div>

            {/* Year */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                Published Year
              </p>
              <p className="text-gray-900 font-medium">
                {bookData?.publishedDate}
              </p>
            </div>

            {/* Price */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                Price
              </p>
              <p className="text-2xl font-bold text-indigo-600">{book.price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[1.5rem] w-[10rem]">
        <Button onClick={addFavourite} variant="contained" color="error">
          {isAdd ? "Remove" : "Add"}
        </Button>
        <Button
          onClick={() => navigate(-1)}
          variant="contained"
          color="success"
        >
          Back
        </Button>
      </div>
    </div>
  );
}
