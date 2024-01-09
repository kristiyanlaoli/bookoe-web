import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ReadBookButton({ to, children }) {
  return (
    <Link to={to}>
      <button className="font-base text-primary bg-white border-2 border-primary px-2 py-2 rounded-md w-full hover:bg-primary hover:text-white">
        {children}
      </button>
    </Link>
  );
}
