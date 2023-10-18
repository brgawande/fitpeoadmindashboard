import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { barchart as data } from "../hocs/chartdata";
import { Box } from "@chakra-ui/react";

const BarChart = () => {
  return (
    <ResponsiveBar
      data={data}
      keys={["earning"]}
      indexBy="month"
      margin={{ top: 50, right: 10, bottom: 50, left: 10 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      // colors={["#ded7ff"]}
      colors={(bar) => bar.data.earningColor}
      // colors={{ scheme: "nivo" }}
      // borderColor="#000000"

      borderRadius={10}
      borderColor="gray" // Specify the border color
      borderWidth={0.3} // Specify the border width
      axisTop={null}
      axisRight={null}
      axisLeft={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      legends={[]}
      enableLabel={false}
      enableGridY={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      isInteractive={true}
      animate={true}
      // width={360} // Adjust width as needed
      // height={400} // Adjust height as needed
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default BarChart;
