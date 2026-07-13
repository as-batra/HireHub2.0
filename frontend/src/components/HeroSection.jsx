import React, { useState } from "react";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center bg-gradient-to-br from-blue-600 via-teal-500 to-green-500 py-24 text-white shadow-lg">
      <div className="flex flex-col items-center gap-8 my-12">
        <span className="mx-auto px-6 py-2.5 rounded-full bg-orange-400 text-blue-900 font-semibold shadow-md transform hover:scale-105 transition-transform duration-200">
          Discover Your Career Path
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
          Find, Apply & <br />
          Secure Your <span className="text-blue-800">Ideal Job</span>
        </h1>
        <p className="text-lg max-w-xl mx-auto text-gray-100">
          A world of opportunities awaits—crafted just for you.
        </p>
        <div className="flex w-[60%] lg:w-[50%] shadow-lg border border-blue-500 pl-6 rounded-full items-center gap-4 bg-white mx-auto">
          <input
            type="text"
            placeholder="Start your job search..."
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full text-blue-800 py-3 px-3 rounded-l-full text-base"
          />
          <button
            onClick={searchJobHandler}
            className="rounded-full px-5 py-2.5 bg-orange-400 hover:bg-orange-500 transition-all duration-200 text-blue-900 font-bold transform hover:scale-105"
          >
            <Search className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
