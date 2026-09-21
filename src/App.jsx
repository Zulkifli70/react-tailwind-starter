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
        "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2024-01-01&endtime=2024-01-02&minmagnitude=5",
      );
      const data = await res.json();
      setDatas(data.features);
    }
    getData();
  }, []);

  return (
    <ul>
      {datas.map((data) => (
        <li key={data.id}>{data.properties.place}</li>
      ))}
    </ul>
  );
};

export default App;
