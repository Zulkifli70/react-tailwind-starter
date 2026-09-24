import { useState, useEffect } from "react";

const App = () => {
  // const API_KEY = import.meta.env.VITE_API_KEY;
  //
  // async function ping() {
  //   const res = await fetch("https://api.coingecko.com/api/v3/ping", {
  //     headers: {
  //       "x-cg-demo-api-key": API_KEY,
  //     },
  //   });
  //   const data = await res.json();
  //   console.log(data); // { gecko_says: "(V3) To the Moon!" }
  // }

  // ping();

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=2665a8bc",
      );
      const data = await res.json();
      setDatas(data);
    }
    getData();
  }, []);

  return (
    <ul>
      {/* {datas.map((data) => (
        <li key={data.id}>{data.Title}</li>
      ))} */}

      {datas.Title}
    </ul>
  );
};

export default App;
