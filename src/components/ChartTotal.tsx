import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Entity } from "../_DATA";
import { arrayBuffer } from "stream/consumers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Total reviews per product",
    },
  },
};

const labels = ["Products"];

export const ChartTotal = (p: { entities: Entity[] }) => {
  const getTotal = (entity: Entity) => {
    return entity.rating.reduce((acc, curr) => acc + curr, 0);
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Sony",
        data: [getTotal(p.entities[0])],
        backgroundColor: "purple",
      },
      {
        label: "Samsung",
        data: [getTotal(p.entities[1])],
        backgroundColor: "teal",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
