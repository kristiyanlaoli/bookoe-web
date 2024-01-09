import SingelBook from "../SingleBook";
import { useParams } from "react-router-dom";

const SingleBookPage = () => {
  const { id } = useParams();

  return (
    <>
      <SingelBook id={id} />
    </>
  );
};

export default SingleBookPage;
