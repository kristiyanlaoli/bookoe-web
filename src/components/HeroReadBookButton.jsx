import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function HeroReadBookButton({ to, children }) {
  return (
    <Link to={to}>
      <button className="font-base text-white bg-primary mr-6 px-2 py-2 rounded-md border-2 border-primary hover:bg-white hover:text-primary hover:border-primary">
        {children}
      </button>
    </Link>
  );
}
