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
    <div key={index} className="grid w-full mt-6 sm:mt-2">
         
      <img
        className="border-2 border-primary rounded-lg h-[400px] md:h-[250px] xl:h-[300px] w-full object-cover"
        src={books.image_url}
        alt={books.title}
      />

      <div className="pt-2 grid items-between">
        <div className="sm:h-[150px]">
          <p className="text-md font-bold line-clamp-3">{books.title}</p>
          <p className="font-bold text-md text-slate-500 my-2">
            <span className="font-semibold">by</span> {books.author.name? books.author.name : "unknown" }
          </p>
          <RatingStars value={books.rating} />
        </div>
        <div className="mt-4">
          <ReadBookButton to={`books/${books.id}`}>Read Book</ReadBookButton>
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
};

export default RelevantBooks;
