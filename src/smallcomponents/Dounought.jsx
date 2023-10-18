import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  // labels: ["Pink", "Voilet", "Gray"],
  datasets: [
    {
      label: "new customers",
      data: [9, 19, 12],
      backgroundColor: [
        "rgba(246,46,147,255)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {};

const textCenter = {
  id: "textCenter",
  beforeDatasetsDraw(chart) {
    const { ctx, data } = chart;
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    ctx.save();
    ctx.font = "bolder 30px sans-serif";
    // ctx.fillStyle = "red";
    ctx.textAlign = "center";

    ctx.textBaseline = "middle";
    ctx.fillText("65%", xCoor, yCoor - 20);

    ctx.font = "bolder 15px sans-serif";
    ctx.fillText("Total New", xCoor, yCoor + 5);
    ctx.font = "bolder 15px sans-serif";
    ctx.fillText("Customers", xCoor, yCoor + 20);
  },
};

const Dounought = () => {
  return <Doughnut data={data} options={options} plugins={[textCenter]} />;
};

export default Dounought;
