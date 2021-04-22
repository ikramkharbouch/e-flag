import Button from "./components/Button";

function App() {
  return (
    <div className="rounded overflow-hidden mx-auto w-8/12">
      <header className="flex justify-between">
        <h1 className="lg:text-4xl md:text-3xl text-2xl mt-4 text-blue-300 justify-self-start">
          eflag
        </h1>
        <Button content="Add a new flag" />
        {/* <div>
          <a href="#">Add a new flag</a>
        </div> */}
      </header>
      <div>
        <h1 className="lg:text-xl md:text-lg text-sm text-font-light mt-10">
          eflag let’s you search for the flag of your preferred country.{" "}
        </h1>
        <Button content="Search existent flags" />
      </div>
    </div>
  );
}

export default App;
