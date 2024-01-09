import { useEffect, useState } from "react";
import { fetchBooksJSON } from "./booksFetcher";
import RatingStars from "./components/RatingStars";
import DateFormater from "./components/DateFormater";

const BookBig = (props) => {
  // eslint-disable-next-line react/prop-types
  const apiParam = `books/${props.id}`;
  const [books, setbooks] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchBooksJSON(apiParam);
        const data = result;
        setbooks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [apiParam]);

  return (
    <>
      {books && (
        <div className="md:flex md:flex-col-2 mt-6 mx-4 xl:mx-24 mb-6 rounded-md">
          <img
            className="rounded-xl mr-10 w-full"
            src={books.image_url}
            alt=""
          />
          <div className="grid items-end">
            <div>
              <p className="font-bold text-4xl my-6">{books.title}</p>
              <p className="font-medium text-slate-600 text-xl mb-4">
                by {books.author.name}
              </p>
              <p className="mb-4">
                <RatingStars value={books.rating} />
              </p>

              <p className="font-semibold text-xl text-slate-600">
                {books.synopsis}
              </p>
            </div>
            <p className="text-slate-600 mt-4 mb-6">
              First published <DateFormater date={books.created_at} />.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookBig;
