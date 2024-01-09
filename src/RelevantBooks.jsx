import RatingStars from "./components/RatingStars";
import ReadBookButton from "./components/ReadBookButton";
import { useEffect, useState } from "react";
import { fetchBooksJSON } from "./booksFetcher";

const apiParam = "books?search=programming";

const RelevantBooks = () => {
  const [databooks, setDatabooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchBooksJSON(apiParam);
        const data = result.data || [];
        setDatabooks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const books = databooks.slice(0, 4);

  const book = books.map((books, index) => (
    <div key={index} className="grid w-full mt-10 ">
      <img
        className="rounded-lg w-full"
        src={books.image_url}
        alt={books.title}
      />
      <div className="py-auto grid items-between">
        <p className="text-md font-bold">{books.title}</p>
        <p className="font-bold text-md text-slate-500 mb-1">
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

export default RelevantBooks;
