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

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function getCoins() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10",
        { headers: { "x-cg-demo-api-key": import.meta.env.VITE_API_KEY } },
      );
      const data = await res.json();
      setCoins(data);
    }
    getCoins();
  }, []);

  return (
    <ul>
      {coins.map((coin) => (
        <li key={coin.id}>
          {coin.name}: ${coin.current_price}
        </li>
      ))}
    </ul>
  );
};

export default App;
