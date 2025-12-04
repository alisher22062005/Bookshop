import { BookOpen } from "lucide-react";
export default function Header() {
  return (
    <>
      <div className="flex justify-between p-[1%] border-b-[1px] border-gray-300 bg-white">
        <div className="flex gap-[0.5rem] pl-[3rem] items-center  ">
          <div>
            <BookOpen color="blue" size={30} />
          </div>
          <div className="text-[1.5rem]">BookStore</div>
        </div>
        <div className="pr-[3rem] items-center">
          <button className="text-white bg-black p-[0.5rem] rounded-[0.5rem] pl-[1rem] pr-[1rem] font-semibold">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
