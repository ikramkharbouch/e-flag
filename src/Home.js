import Button from "./components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="rounded overflow-hidden mx-auto w-8/12">
      <div>
        <h1 className="lg:text-xl md:text-lg text-sm text-font-light mt-10">
          eflag let’s you search for the flag of your preferred country.{" "}
        </h1>
        <Link to="/search">
          <Button content="Search existent flags" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
