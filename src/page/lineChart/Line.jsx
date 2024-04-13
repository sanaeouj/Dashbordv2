 
 
import React from "react";
import { Box, useTheme } from "@mui/material";

import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "france",
    color: "hsl(4, 70%, 50%)",
    data: [
      {
        x: "rabat",
        y: 79,
      },
      {
        x: "casablanca",
        y: 28,
      },
      {
        x: "Jadida",
        y: 150,
      },
      {
        x: "essouira",
        y: 173,
      },
      {
        x: "Marrakech",
        y: 234,
      },
      {
        x: "agadir",
        y: 98,
      },
      {
        x: "tanger",
        y: 244,
      },
      {
        x: "tetouan",
        y: 295,
      },
      {
        x: "Fès",
        y: 287,
      },
      {
        x: "Meknès",
        y: 157,
      },
      {
        x: "Chefchaouen",
        y: 239,
      },
      {
        x: "others",
        y: 69,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(205, 70%, 50%)",
    data: [
      {
        x: "rabat",
        y: 278,
      },
      {
        x: "casablanca",
        y: 222,
      },
      {
        x: "Jadida",
        y: 65,
      },
      {
        x: "essouira",
        y: 213,
      },
      {
        x: "Marrakech",
        y: 89,
      },
      {
        x: "agadir",
        y: 278,
      },
      {
        x: "tanger",
        y: 231,
      },
      {
        x: "tetouan",
        y: 47,
      },
      {
        x: "Fès",
        y: 126,
      },
      {
        x: "Meknès",
        y: 191,
      },
      {
        x: "Chefchaouen",
        y: 95,
      },
      {
        x: "others",
        y: 26,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(39, 70%, 50%)",
    data: [
      {
        x: "rabat",
        y: 3,
      },
      {
        x: "casablanca",
        y: 187,
      },
      {
        x: "Jadida",
        y: 259,
      },
      {
        x: "essouira",
        y: 294,
      },
      {
        x: "Marrakech",
        y: 158,
      },
      {
        x: "agadir",
        y: 146,
      },
      {
        x: "tanger",
        y: 125,
      },
      {
        x: "tetouan",
        y: 253,
      },
      {
        x: "Fès",
        y: 230,
      },
      {
        x: "Meknès",
        y: 287,
      },
      {
        x: "Chefchaouen",
        y: 193,
      },
      {
        x: "others",
        y: 12,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(179, 70%, 50%)",
    data: [
      {
        x: "rabat",
        y: 213,
      },
      {
        x: "casablanca",
        y: 271,
      },
      {
        x: "Jadida",
        y: 22,
      },
      {
        x: "essouira",
        y: 270,
      },
      {
        x: "Marrakech",
        y: 97,
      },
      {
        x: "agadir",
        y: 146,
      },
      {
        x: "tanger",
        y: 116,
      },
      {
        x: "tetouan",
        y: 159,
      },
      {
        x: "Fès",
        y: 165,
      },
      {
        x: "Meknès",
        y: 210,
      },
      {
        x: "Chefchaouen",
        y: 76,
      },
      {
        x: "others",
        y: 126,
      },
    ],
  },
];

const Line = ({isDahboard = false}) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDahboard?  "280px"  :  "75vh" }}>
      <ResponsiveLine
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
 
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
       
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDahboard? null : "Count",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
