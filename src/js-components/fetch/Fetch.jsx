import React, { useEffect, useState } from "react";
const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        let data = await response.json();
        setData(data);
      } catch (error) {}
    };

    getData();
  }, []);
  console.log("Fetched APi data", data);

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

export default Fetch;
