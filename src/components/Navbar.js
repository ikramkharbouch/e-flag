import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="rounded mx-auto w-8/12">
      <header className="flex justify-between">
        <Link to="/">
          <h1 className="lg:text-4xl md:text-3xl text-2xl mt-4 text-blue-300 justify-self-start font-bold">
            eflag
          </h1>
        </Link>
        <Link to="/add">
          <Button content="Add a new flag" />
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
