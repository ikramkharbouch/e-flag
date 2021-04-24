import { useState } from "react";
import Button from "./components/Button";

const AddFlag = () => {
  const [country, setCountry] = useState("");
  // const [files, setFiles] = useState([]);

  const min = 1;
  const max = 5;
  const randomNb = Math.floor(min + Math.random(0, 5) * (max - min));
  const path = `../FakeFlags/fakeflag-${randomNb}.png`;
  const newCountry = { country: country, path: path };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(country);
    fetch("http://localhost:8000/flags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCountry),
    })
      .then(() => console.log("Inserted Successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-auto text-center mt-4">
      <h1 className="text-4xl font-bold">Add new flag</h1>
      <p className="text-base font-light mt-2">
        (A flag will be generated accordingly)
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-8/12	mx-auto mt-10"
      >
        <label className="text-left font-bold mb-4">Country's name</label>
        <input
          type="text"
          className="border border-blue-300 rounded px-2 py-4"
          placeholder="Enter your country's name"
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <Button content="Submit" />
      </form>
    </div>
  );
};

export default AddFlag;
