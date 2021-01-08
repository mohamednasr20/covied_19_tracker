import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/historical/usa?lastdays=90"
      );
      setData(response.data.timeline);
    };
    getData();
  }, []);

  const state = {
    labels: data.cases ? Object.keys(data.cases) : [],
    datasets: [
      {
        label: "Cases",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "#d72323",
        borderColor: "#d72323",
        borderWidth: 2,
        data: data.cases ? Object.values(data.cases) : [],
      },
    ],
  };

  return (
    <div className="d-none d-sm-block mb-3">
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Cases In Last 3 Months",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "top",
            reverse: true,
          },
        }}
      />
    </div>
  );
};

export default Chart;
