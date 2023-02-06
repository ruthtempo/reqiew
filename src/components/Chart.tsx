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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Reviews Rating Comparison",
    },
  },
};

const labels = ["5 stars", "4 stars", "3 stars", "2 stars", "1 star"];

export const Chart = (p: { entities: Entity[] }) => {
  const entityRatings = p.entities.map((entity) => entity.rating);

  const data = {
    labels,
    datasets: [
      {
        label: p.entities[0].brand,
        data: entityRatings[0],
        borderColor: "purple",
        backgroundColor: "purple",
      },
      {
        label: p.entities[1].brand,
        data: entityRatings[1],
        borderColor: "teal",
        backgroundColor: "teal",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
