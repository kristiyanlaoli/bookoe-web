import RatingStars from "./components/RatingStars";
import ReadBookButton from "./components/ReadBookButton";
import DateFormater from "./components/DateFormater";
import { useEffect, useState } from "react";
import { fetchBooksJSON } from "./booksFetcher";
import newestBooksSorter from "./tools/newestBooksSorter";

const apiParam = `books?page=${Math.floor(Math.random() * 101)}`;

const LatestBook = () => {
  const [databooks, setDatabooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBooksJSON(apiParam);
        const data = await newestBooksSorter(response.data || []);
        setDatabooks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const books = databooks.slice(0, 4);

  const book = books.map((books, index) => (
    <div key={index} className="grid w-full mt-10">
      <div className="bg-primary h-8 px-3 my-0 m-0 rounded-r-3xl grid items-center w-[fit-content] relative top-16">
        <p className="text-white">
          {" "}
          <DateFormater date={books.created_at}></DateFormater>
        </p>
      </div>
      <img
        className="rounded-lg w-full"
        src={books.image_url}
        alt={books.title}
      />
      <div className="py-auto grid items-between">
        <p className="text-md font-bold">{books.title}</p>
        <p className="font-bold text-md text-slate-500 my-2">
          <span className="font-semibold">by</span> {books.author.name}
        </p>
        <RatingStars value={books.rating} />
        <div className="mt-4">
          <ReadBookButton to={`books/${books.id}`}>Read Book</ReadBookButton>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="grid sm:grid-cols-2 md:flex md:justify-between sm:gap-10 mx-4 xl:mx-24 mt-8 mb-28">
        {book}
      </div>
    </>
  );
};

export default LatestBook;
