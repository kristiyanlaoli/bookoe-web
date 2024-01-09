import { useEffect, useState } from "react";
import HeroReadBookButton from "./components/HeroReadBookButton";
import { Link } from "react-router-dom";
import { fetchBooksJSON } from "./booksFetcher";
const apiParam = "books?search=love";

const Hero = () => {
  const [books, setbooks] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchBooksJSON(apiParam);
        const data = result.data || [];
        setbooks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {books && (
        <div className="bg-secondary mx-4 mt-6 md:p-6 rounded-xl px-3 py-3 xl:mx-24 xl:py-7 xl:px-10">
          <p className="font-bold text-primary mb-4">MUST READ</p>
          <div className="md:flex">
            <div className="relative flex mb-4 md:hidden">
              <img
                src={books[0].image_url}
                alt=""
                className="rounded-lg z-30 max-h-[300px]"
              />
              <img
                src={books[1].image_url}
                alt=""
                className="absolute right-[27%] sm:right-[35%] md:right-[40%] rounded-lg z-20 max-h-[280px]"
              />
              <img
                src={books[2].image_url}
                alt=""
                className="absolute right-0 rounded-lg z-10 max-h-[260px]"
              />
            </div>
            <div className="md:w-3/5 md:mr-4 xl:mr-6">
              <p className="md:text-2xl font-bold">{books[0].title}</p>
              <p className="font-bold text-slate-500 py-4">
                {books[0].author.name}
              </p>
              <p className="text-black">{books[1].synopsis}</p>
              <div className="grid sm:flex mt-4">
                <HeroReadBookButton to={`books/${books[0].id}`}>
                  Read book ➡️
                </HeroReadBookButton>
                <Link
                  className="mt-4 sm:mt-0 max-w-48 text-primary bg-white border-2 border-primary px-2 py-2 rounded-md hover:bg-primary hover:text-white"
                  to="latest"
                >
                  See All Recomendations
                </Link>
              </div>
            </div>
            <div className="hidden md:flex">
              <img
                src={books[0].image_url}
                alt=""
                className="rounded-lg z-30 max-h-[300px]"
              />
              <img
                src={books[1].image_url}
                alt=""
                className="absolute md:right-[15%] xl:right-[18%] rounded-lg z-20 max-h-[280px]"
              />
              <img
                src={books[2].image_url}
                alt=""
                className="absolute md:right-[3%] xl:right-[10%] rounded-lg z-10 max-h-[260px]"
              />
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
