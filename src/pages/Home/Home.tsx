import { useEffect, useState } from "react";
import Header from "../../shared/Header";
// import Filter from "./components/Filter/FIlter";
import HeroSection from "./components/HeroSection/HeroSection";
import CircularIndeterminate from "../../shared/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  });

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
      <Header />
      <HeroSection />
      {/* <Filter /> */}
    </>
  );
}
