import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/states/new%20york"
      );
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, []);

  const dataInfo = data.cases && (
    <div>
      <h3>Cases: {data.cases}</h3>
    </div>
  );
  return (
    <div>
      <h1>Covied 19 Tracker</h1>
      {dataInfo}
    </div>
  );
};

export default App;
