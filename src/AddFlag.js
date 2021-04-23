import { useState } from "react";
import Button from "./components/Button";
import DropZone from "./components/DropZone";
import { useLocation } from "react-router-dom";

const AddFlag = () => {
  const [country, setCountry] = useState("");
  // const [files, setFiles] = useState([]);
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(country);
    console.log(location.state.files);
  };

  return (
    <div className="mx-auto text-center mt-4">
      <h1 className="text-4xl font-bold">Add new flag</h1>
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
        <label className="text-left font-bold mt-4">Country's flag</label>
        <DropZone />
        <Button content="Submit" />
      </form>
    </div>
  );
};

export default AddFlag;
