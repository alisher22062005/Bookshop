// import { Search } from "lucide-react";
// export default function NotFoundBook() {
//   return (
//     <>
//       <div className="flex flex-col gap-[1rem] justify-center items-center ">
//         <Search className="bg-purple-100 h-[60px] w-[60px] p-[1%] rounded-[2rem] text-gray-500" />
//         <div>No articles found</div>
//         <div className="text-gray-500">
//           Try adjusting your search or filter criteria
//         </div>
//         {/* <WhiteButton className="border-3px]" text={"Clear filters"} /> */}
//       </div>
//     </>
//   );
// }

import { BookOpen, Search } from "lucide-react";

export default function BookNotFound() {
  return (
    <div className=" bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center ">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-50"></div>
          <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-6">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-slate-800 mb-3">
          No Books Found
        </h1>

        <p className="text-slate-600 mb-6 leading-relaxed">
          We couldn't find any books matching your search. Try adjusting your
          search terms or browse our collection.
        </p>

        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3 text-left">
            <Search className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-slate-700">
              <p className="font-semibold mb-2">Search Tips:</p>
              <ul className="space-y-1 text-slate-600">
                <li>• Check your spelling</li>
                <li>• Try different keywords</li>
                <li>• Use the book title or author name</li>
                <li>• Browse by category instead</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105">
            Browse All Books
          </button>
          <button className="flex-1 border-2 border-slate-200 text-slate-700 font-medium py-3 px-6 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
            Clear Search
          </button>
        </div>
      </div>
    </div>
  );
}
