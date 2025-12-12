import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/authContext";
import { useEffect } from "react";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CircleUser } from "lucide-react";

export default function Header() {
  let { user } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      user = null;
      console.log("User logged out successfully");

      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  useEffect(() => {
    console.log("USer", user);
  }, []);
  return (
    <>
      <div className="flex justify-between p-[1%] border-b-[1px] border-gray-300 bg-white">
        <div className="flex gap-[0.5rem] pl-[3rem] items-center  ">
          <div>
            <BookOpen color="blue" size={30} />
          </div>
          <div className="text-[1.5rem]">BookStore</div>
        </div>

        <div className="flex items-center gap-[1rem] font-semibold">
          <div
            onClick={() => navigate("/about")}
            className="flex justify-center items-center text-[1.2rem] hover:text-indigo-600 transition-colors"
          >
            About
          </div>
          <div
            onClick={() => navigate("/")}
            className="flex justify-center items-center text-[1.2rem] hover:text-indigo-600 transition-colors"
          >
            Menu
          </div>
        </div>
        {user && (
          <div className="pr-[3rem] items-center flex gap-[1.5rem]">
            <div>
              <CircleUser onClick={() => navigate("/profile")} size={40} />
            </div>
            <Link
              onClick={handleLogout}
              to={"/logIn"}
              className="text-white bg-black p-[0.5rem] rounded-[0.5rem] pl-[1rem] pr-[1rem] font-semibold"
            >
              LogOut
            </Link>
          </div>
        )}
        {user == null && (
          <div className="pr-[3rem] items-center">
            <Link
              to={"/logIn"}
              className="text-white bg-black p-[0.5rem] rounded-[0.5rem] pl-[1rem] pr-[1rem] font-semibold"
            >
              LogIn
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
