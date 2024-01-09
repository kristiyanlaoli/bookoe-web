import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function BackHomeButton({ to, children }) {
  return (
    <Link to={to}>
      <button className="mx-auto font-bold text-primary border-2 border-primary rounded-md p-2 hover:bg-primary hover:text-white">
        {children}
      </button>
    </Link>
  );
}
