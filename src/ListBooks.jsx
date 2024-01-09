import RatingStars from "./components/RatingStars";
import ReadBookButton from "./components/ReadBookButton";

import { useEffect, useState } from "react";
import { fetchBooksJSON } from "./booksFetcher";

const apiParam = "books?is_top_pick=true";

const ListBooks = () => {
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

  const books = databooks.slice(0, 12);

  const book = books.map((books, index) => (
    <div
      key={index}
      className="grid grid-cols-2 gap-2 md:gap-4 xl:gap-6 max-h-[400px] mb-8"
    >
      <img
        className="rounded-lg mb-20 object-cover w-full h-[400px] md:h-[400px]"
        src={books.image_url}
        alt={books.title}
      />
      <div className="px-2 grid content-between mb-20 max-h-[400px]">
        <div>
          <p className="text-xl font-bold">{books.title}</p>
          <p className="font-bold text-md text-slate-500 py-2 my-2">
            <span className="font-semibold">by</span> {books.author.name}
          </p>
          <RatingStars value={books.rating} />
          <p className="text-black text-sm pt-2">{books.synopsis}</p>
        </div>
        <div className="mt-4">
          <ReadBookButton to={`books/${books.id}`}>Read Book</ReadBookButton>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="mx-4 rounded-md mt-10 xl:mx-24">
        <div className="wrap grid grid-cols-1 gap-4 md:grid-cols-2">{book}</div>
      </div>
    </>
  );
};

export default ListBooks;

/* <div className="grid grid-cols-2 max-h-[400px] mb-16">
<img
  className="rounded-lg mb-20 max-h-[400px]"
  src="/src/img/hero/book1-rekomendation.png"
  alt=""
/>
<div className="px-2 grid content-between mb-20 max-h-[400px]">
  <div>
    <p className="text-4xl font-bold">
      I Want A Better
      <br />
      Ccatastrophe
    </p>
    <p className="font-bold text-xl text-slate-500 py-8">
      Andrew Boyd
    </p>
    <p className="text-black text-xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Fugit, quasi. Lorem ipsum dolor sit amet consectetur
      adipisicing elit.
    </p>
  </div>
  <div className="mt-4">
    <button className="font-base text-primary bg-white border-2 border-primary px-2 py-2 rounded-md w-full">
      Read book
    </button>
  </div>
</div>
</div> */