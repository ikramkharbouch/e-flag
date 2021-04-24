import { useState } from "react";

const Search = () => {
  const [country, setCountry] = useState("");
  const [countryVal, setCountryVal] = useState("");
  const [isReal, setIsReal] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [nonExistent, setNonExistent] = useState(false);

  const searchJsonDb = () => {
    fetch(`http://localhost:8000/flags?country=${country}`)
      .then((res) => res.json())
      .then((data) => {
        setImgSrc(data[0].path);
        setIsReal(false);
        setCountryVal(country);
      })
      .catch((err) => {
        setNonExistent(true);
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((res) => res.json())
      .then((data) => {
        setImgSrc(data[0].flag);
        setIsReal(true);
        setCountryVal(country);
      })
      .catch((err) => {
        setNonExistent(true);
        searchJsonDb();
        console.log(err.message);
      });

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
          {imgSrc && (
            <img
              src={imgSrc}
              alt=""
              width="300"
              height="300"
              className="border-2 border-black rounded"
            />
          )}
        </div>
        <div>
          {!nonExistent && !imgSrc && country && (
            <h3 className="font-light">Loading...</h3>
          )}
          {imgSrc && <h3 className="font-light mt-4">{countryVal}</h3>}
          {isReal && imgSrc && (
            <p className="text-blue-300 font-bold mt-2">Real Country</p>
          )}
          {!isReal && imgSrc && (
            <p className="text-blue-300 font-bold mt-2">Fake Country</p>
          )}
          {nonExistent && !imgSrc && (
            <h3 className="font-light">Country Does Not Exist</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
