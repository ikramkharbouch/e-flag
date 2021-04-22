import { useState } from "react";

const Search = () => {
  const [country, setCountry] = useState("");
  // eslint-disable-next-line
  const [isReal, setIsReal] = useState(false);
  // eslint-disable-next-line
  const [imgSrc, setImgSrc] = useState("https://restcountries.eu/data/mar.svg");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(country);
    setCountry("");
  };

  return (
    <div className="mx-auto text-center mt-14">
      <h1 className="lg:text-3xl md:text-xl text-sm font-bold">
        Enter a country's name
      </h1>
      <div className="mx-auto flex justify-center text-center">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex justify-center w-full"
        >
          <input
            type="text"
            className="shadow-2xl rounded mx-20 mt-10 lg:px-4 lg:py-4 px-2 py-2 lg:w-3/5 md:w-11/12 w-max"
            placeholder="Ex: Morocco"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </form>
      </div>
      <div className="mx-auto flex flex-col justify-center text-center mt-10">
        <div className="mx-auto">
          {imgSrc && <img src={imgSrc} alt="" width="300" height="300" />}
        </div>
        <div>
          {imgSrc && <h3 className="font-light">{country}</h3>}
          {isReal && imgSrc && <p className="text-blue-300 font-bold">Real</p>}
          {!isReal && imgSrc && <p className="text-blue-300 font-bold">Fake</p>}
        </div>
      </div>
    </div>
  );
};

export default Search;
