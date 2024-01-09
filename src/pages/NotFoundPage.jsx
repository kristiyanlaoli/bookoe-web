/* eslint-disable react/no-unescaped-entities */
import BackHomeButton from "../components/BackHomeButton";

const NotFoundPage = () => {
  return (
    <>
      <div className="my-0 p-0 rounded-md">
        <div className="flex justify-center ">
          <img
            className="hidden md:block"
            src="/src/img/notfoundpage/Books.svg"
            alt=""
          />
          <img
            className="hidden sm:block"
            src="/src/img/notfoundpage/Books2.svg"
            alt=""
          />
          <img src="/src/img/notfoundpage/Books3.svg" alt="" />
        </div>
        <div className="text-center">
          <p className="font-bold text-8xl text-primary">404</p>
          <p className="font-medium text-2xl text-primary">
            Looks like you've got lost
          </p>
          <p className="text-xl text-slate-500 px-auto my-6">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <BackHomeButton to="/">Back Home</BackHomeButton>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
