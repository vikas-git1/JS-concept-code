import React, { useEffect, useState } from "react";
import axios from "axios";
const Axios = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {}
    };

    getData();
  }, []);
  console.log("Fetched data", data);

  return (
    <div>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Axios;
