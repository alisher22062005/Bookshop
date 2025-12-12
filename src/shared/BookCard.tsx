import { Heart } from "lucide-react";
import defaultImage from "../assets/channels4_profile.jpg";
import { useEffect, useState } from "react";
export default function BookCard({
  title,
  describe,
  author,
  image,
}: // isAdd,
{
  title: string;
  describe: string;
  author: string;
  image: string;
  // isAdd: boolean;
}) {
  const [isAdd, setIsAdd] = useState(false);
  useEffect(() => {
    const favourites = JSON.parse(localStorage?.getItem("books") || "[]");
    if (favourites.length > 0) {
      const check: boolean = favourites.find(
        (item: any) => item.title == title
      );
      check ? setIsAdd(true) : "";
    }
  }, []);

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm rounded-t-[1rem] h-[400px] ">
        <figure className="h-[250px]">
          <img
            className="rounded-t-[1rem] object-fill w-full h-full"
            src={image || defaultImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-[1rem] ">
          <h2 className="card-title text-[1.3rem] font-bold line-clamp-1">
            {title}
          </h2>
          <div className=" italic font-serif text-gray-500 text-[1.1rem]">
            {author}
          </div>
          <p className="line-clamp-2">{describe}</p>
        </div>
      </div>
    </>
  );
}
