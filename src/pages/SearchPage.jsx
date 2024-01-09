import SearchBook from "/src/SearchBook.jsx";
import { useParams } from "react-router-dom";

import SearchInformationContainer from "../SearchInformationContainer";

function SearchPage() {
  const { keyword } = useParams();

  return (
    <>
      <SearchInformationContainer value={keyword} />
      <SearchBook valueSearch={keyword} />
    </>
  );
}

export default SearchPage;
