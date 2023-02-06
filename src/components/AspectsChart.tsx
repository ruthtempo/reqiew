import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Entity } from "../_DATA";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const AspectsChart = (p: { entities: Entity[] }) => {
  const aspects = p.entities.map((entity) => Object.values(entity.aspects));

  const data = {
    labels: [
      "Quality ",
      "Safety",
      "Design",
      "Service",
      "Cleaning",
      "Food Taste",
    ],
    datasets: [
      {
        label: p.entities[0].brand,
        data: aspects[0],
        backgroundColor: "rgb(128,0,128,0.5)",
        borderColor: "purple",
        borderWidth: 1,
      },
      {
        label: p.entities[1].brand,
        data: aspects[1],
        backgroundColor: "rgb(0,128,128,0.5)",
        borderColor: "teal",
        borderWidth: 1,
      },
    ],
  };
  return (
    <Radar
      data={data}
      options={{ maintainAspectRatio: true, responsive: true }}
    />
  );
};
