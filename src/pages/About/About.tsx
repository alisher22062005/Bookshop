import { BookOpen, Heart, Sparkles, Users, CircleUser } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { useAuth } from "../../firebase/authContext";
import { signOut } from "firebase/auth";
import { useState } from "react";
import CircularIndeterminate from "../../shared/Loading";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  });

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

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center h-[100vh] w-full">
          {" "}
          <CircularIndeterminate />
        </div>
      </>
    );
  }
  return (
    <>
      {/* Header */}
      <div className="flex justify-between p-[1%] border-b-[1px] border-gray-300 bg-white">
        <div className="flex gap-[0.5rem] pl-[3rem] items-center">
          <div>
            <BookOpen color="blue" size={30} />
          </div>
          <div className="text-[1.5rem]">BookStore</div>
        </div>

        <div className="flex items-center gap-[1rem] font-semibold">
          <div
            onClick={() => navigate("/about")}
            className="flex justify-center items-center text-[1.2rem] cursor-pointer hover:text-indigo-600 transition-colors"
          >
            About
          </div>
          <div
            onClick={() => navigate("/")}
            className="flex justify-center items-center text-[1.2rem] cursor-pointer hover:text-indigo-600 transition-colors"
          >
            Menu
          </div>
        </div>

        {user && (
          <div className="pr-[3rem] items-center flex gap-[1.5rem]">
            <div className="cursor-pointer hover:opacity-70 transition-opacity">
              <CircleUser onClick={() => navigate("/profile")} size={40} />
            </div>
            <Link
              onClick={handleLogout}
              to={"/logIn"}
              className="text-white bg-black p-[0.5rem] rounded-[0.5rem] pl-[1rem] pr-[1rem] font-semibold hover:bg-gray-800 transition-colors"
            >
              LogOut
            </Link>
          </div>
        )}
        {user == null && (
          <div className="pr-[3rem] items-center">
            <Link
              to={"/logIn"}
              className="text-white bg-black p-[0.5rem] rounded-[0.5rem] pl-[1rem] pr-[1rem] font-semibold hover:bg-gray-800 transition-colors"
            >
              LogIn
            </Link>
          </div>
        )}
      </div>

      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-full mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              About Our Library
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A modern space where book lovers discover, explore, and share
              their passion for reading
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that every book has the power to inspire, educate, and
              transform lives. Our mission is to make reading accessible and
              enjoyable for everyone by providing a curated collection of books
              across all genres, coupled with a seamless digital experience that
              brings the joy of reading to your fingertips.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Curated Selection
              </h3>
              <p className="text-gray-600">
                Handpicked books across fiction, non-fiction, classics, and
                contemporary bestsellers
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Modern Experience
              </h3>
              <p className="text-gray-600">
                Intuitive interface designed to make discovering your next
                favorite book effortless
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Driven
              </h3>
              <p className="text-gray-600">
                Join a community of readers who share recommendations and
                insights
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed mb-4 text-indigo-50">
              Founded by passionate readers and technology enthusiasts, we
              started with a simple idea: make the world of books more
              accessible and connected. What began as a small collection has
              grown into a comprehensive library serving thousands of readers
              worldwide.
            </p>
            <p className="text-lg leading-relaxed text-indigo-50">
              Today, we continue to innovate and expand, always keeping our
              focus on what matters most—helping you find books that inspire,
              challenge, and delight you.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                10K+
              </div>
              <div className="text-gray-600">Books Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                50K+
              </div>
              <div className="text-gray-600">Active Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                100+
              </div>
              <div className="text-gray-600">Genres</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
