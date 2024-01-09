import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [keyword, setKeyword] = useState("");
  console.log(keyword);
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header className="mt-6 py-2 md:flex md:justify-between md:mx-4 xl:mx-24">
        <div className="flex justify-center ">
          <img src="/src/img/header/logo.svg" alt="" className="mr-4" />
          <div className="flex-col my-auto">
            <h1 className="font-bold text-4xl text-black">Bookoe</h1>
            <p>Rekomendasi Bukumu</p>
          </div>
        </div>

        <nav id="nav-menu">
          <ul className="flex justify-between max-w-[235px] my-4 mx-auto">
            <li className="group">
              <NavLink
                className={`text-xl font-semibold text-dark group-hover:text-primary ${
                  activeTab === "Home" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Home")}
                to="/"
              >
                All
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                className={`text-xl font-semibold text-dark group-hover:text-primary md:mx-8 ${
                  activeTab === "Latest" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Latest")}
                to="latest"
              >
                Latest
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                className={`text-xl font-semibold text-dark group-hover:text-primary ${
                  activeTab === "Top Picks" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Top Picks")}
                to="top-picks"
              >
                Top Picks
              </NavLink>
            </li>
          </ul>
        </nav>

        <form
          onSubmit={handleSearch}
          className="max-w-[235px] mx-auto md:mx-0 md:my-auto"
        >
          <label
            htmlFor="default-search"
            className="text-sm font-medium text-gray-200 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 px-9 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Book..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              required
            ></input>
            <Link
              to={`search/${keyword}`}
              className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary dark:hover:bg-blue-400 dark:focus:ring-blue-800"
            >
              <button type="submit">Search</button>
            </Link>
          </div>
        </form>
      </header>
    </>
  );
};

export default Header;
