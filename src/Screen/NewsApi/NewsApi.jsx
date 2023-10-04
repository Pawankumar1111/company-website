import axios from "axios";
import React, { useEffect, useState } from "react";

const NewsApi = () => {
  const [data, setData] = useState([]);
  const apikey = "ed7705f4156b4bff8e3ee2b92793b2c0";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apikey}`
      )
      .then((response) => setData(response.data()))
      .catch((error) => console.log(error));
  }, []);
};
