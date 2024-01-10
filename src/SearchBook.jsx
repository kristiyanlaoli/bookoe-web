/* eslint-disable react/prop-types */

import RatingStars from "./components/RatingStars";
import ReadBookButton from "./components/ReadBookButton";
import { useEffect, useState } from "react";
import { fetchBooksJSON } from "./booksFetcher";

const SearchBook = (props) => {
  const [databooks, setDatabooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchBooksJSON(
          `books?search=${props.valueSearch}`
        );
        const data = result.data || [];
        setDatabooks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.valueSearch]);

  const books = databooks;

  if (books.length === 0) {
    return (
      <>
        <div className="border-2 border-primary mx-4 xl:mx-24 mt-8 rounded-xl min-h-[350px] pt-[10%] align-middle">
          <p className="text-center font-bold text-7xl text-primary">
            Book Not Found.
          </p>
        </div>
      </>
    );
  } else {
    const book = books.map((books, index) => (
      <div key={index} className="grid w-full mt-6 sm:mt-2">
        <img
          className="border-2 border-primary rounded-lg h-[400px] md:h-[250px] xl:h-[350px] w-full object-cover"
          src={books.image_url}
          alt={books.title}
        />

        <div className="pt-2 grid items-between">
          <div className="sm:h-[150px]">
            <p className="text-md font-bold line-clamp-3">{books.title}</p>
            <p className="font-bold text-md text-slate-500 my-2">
              <span className="font-semibold">by</span>{" "}
              {books.author.name ? books.author.name : "unknown"}
            </p>
            <RatingStars value={books.rating} />
          </div>
          <div className="mt-4">
            <ReadBookButton to={`/books/${books.id}`}>Read Book</ReadBookButton>
          </div>
        </div>
      </div>
    ));

    return (
      <>
        <div className="mx-4 mt-4 sm:mt-8 mb-10 grid sm:grid-cols-2 sm:gap-10 md:grid md:grid-cols-4 xl:mx-24">
          {book}
        </div>
      </>
    );
  }
};

export default SearchBook;
