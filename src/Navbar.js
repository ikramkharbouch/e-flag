import Button from "./components/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="rounded overflow-hidden mx-auto w-8/12">
      <header className="flex justify-between">
        <h1 className="lg:text-4xl md:text-3xl text-2xl mt-4 text-blue-300 justify-self-start">
          eflag
        </h1>
        <Link to="/add">
          <Button content="Add a new flag" />
        </Link>

        {/* <div>
          <a href="#">Add a new flag</a>
        </div> */}
      </header>
    </div>
  );
};

export default Navbar;
