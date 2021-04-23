import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const DropZone = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  // eslint-disable-next-line
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const dragOver = (e) => {
    e.preventDefault();
  };
  const dragEnter = (e) => {
    e.preventDefault();
  };
  const dragLeave = (e) => {
    e.preventDefault();
  };
  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };

  useEffect(() => {
    history.push({
      pathname: "/add",
      state: {
        files: selectedFiles,
      },
    });
  });

  const validateFile = (file) => {
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/x-icon",
    ];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  const fileSize = (size) => {
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const fileType = (fileName) => {
    return (
      fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) ||
      fileName
    );
  };

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        // add to an array so we can display the name of file
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
      } else {
        // add a new property called invalid
        // add to the same array so we can display the name of the file
        // set error message
        files[i]["invalid"] = true;
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
        setErrorMessage("File type not permitted");
      }
    }
  };

  const removeFile = () => {
    console.log("clicked");
    setSelectedFiles([]);
  };
  return (
    <div className="container translate-y-full h-60 mt-4">
      <div
        className="drop-container flex flex-col justify-center h-full border text-center rounded border-blue-300"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <div className="drop-message">
          <div className="upload-icon lg:px-0 px-4 lg:text-3xl text-sm text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Drag & Drop files here or click to upload
          </div>
        </div>
        <div className="file-display-container">
          <div className="file-status-bar mt-10 h-14 flex flex-row justify-center">
            <div>
              <span className="file-type-logo"></span>
              {selectedFiles[0] && (
                <span className="file-type text-blue-200">
                  {fileType(selectedFiles[0].name)}{" "}
                </span>
              )}
              {selectedFiles[0] && (
                <span className="file-name font-bold">
                  {selectedFiles[0].name}{" "}
                </span>
              )}
              {selectedFiles[0] && (
                <span className="file-size text-green-400 font-bold">
                  {fileSize(selectedFiles[0].size)}
                </span>
              )}
              {selectedFiles[0] && selectedFiles[0]["invalid"] === true && (
                <span className="file-error-message text-red-600 font-bold">
                  (File type not permitted)
                </span>
              )}
            </div>
            {selectedFiles[0] && (
              <div
                className="file-remove ml-10 text-red-600 font-bold cursor-pointer"
                onClick={removeFile}
              >
                X
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropZone;
