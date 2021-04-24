import { useState } from "react";
import Button from "./components/Button";

const AddFlag = () => {
  const [country, setCountry] = useState("");
  // const [files, setFiles] = useState([]);

  const [countryExists, setCountryExists] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [validMsg, setValidMsg] = useState("");

  const images = {
    1: ["https://i.imgur.com/fn5FOFc.png"],
    2: ["https://i.imgur.com/0hgxQzC.png"],
    3: ["https://i.imgur.com/M2BPjel.png"],
    4: ["https://i.imgur.com/gJtexmx.png"],
    5: ["https://i.imgur.com/kjRnPMT.png"],
  };

  const min = 1;
  const max = 5;
  const randomNb = Math.floor(min + Math.random(0, 5) * (max - min));
  const path = images[randomNb];
  const newCountry = { country: country, path: path };

  const checkCountryName = () => {
    const abortCont = new AbortController();

    // Fetch the restcountries api
    fetch(`https://restcountries.eu/rest/v2/name/${country}`, {
      method: "GET",
      signal: abortCont.signal,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.length !== 0 && data.status !== 404) {
          setCountryExists(true);
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else setErrorMsg(err.message);
      });
    // Fetch our json server

    fetch(`http://localhost:8000/flags?country=${country}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length !== 0) {
          setCountryExists(true);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    checkCountryName();
    if (!countryExists) {
      fetch("http://localhost:8000/flags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCountry),
      })
        .then(() => {
          setValidMsg("Country Added Successfully");
          setCountry("");
        })
        .catch((err) => console.log(err));
    } else {
      setErrorMsg("Country Already Exists");
    }
  };

  return (
    <div className="mx-auto text-center mt-4">
      <h1 className="text-4xl font-bold">Add new flag</h1>
      <p className="text-base font-light mt-2">
        (A flag will be generated accordingly)
      </p>
      {errorMsg && (
        <p className="text-base font-light mt-2 text-red-500">{errorMsg}</p>
      )}
      {validMsg && (
        <p className="text-base font-light mt-2 text-green-500">{validMsg}</p>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-8/12	mx-auto mt-10"
      >
        <label className="text-left font-bold mb-4">Country's name</label>
        <input
          type="text"
          className="border border-blue-300 rounded px-2 py-4"
          placeholder="Enter your country's name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <Button content="Submit" />
      </form>
    </div>
  );
};

export default AddFlag;
