import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [countryExists, setCountryExists] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setCountryExists(true);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setErrorMsg(err.message);
          }
        });
    }, 5000);
    return () => {
      abortCont.abort();
    };
  }, [url]);
  return { countryExists };
};

export default useFetch;
