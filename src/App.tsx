import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // STATE
  const [data, setData] = useState("");

  useEffect(() => {
    const url = "http://localhost:5173/api/hi";

    const fetchData = async () => {
      const res = await axios.get(url);
      const response = res.data;

      setData(response);
    };

    fetchData();
  });

  return (
    <>
      <div>{data}</div>
    </>
  );
}

export default App;
