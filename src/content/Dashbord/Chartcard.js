import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Splinearea from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Splinearea, FusionTheme);

const Chartcard = (props) => {
  FusionCharts.ready(function () {
    var chart = new FusionCharts({
      type: "splinearea",
      renderAt: `chart-container${props.da._id}`,
      dataFormat: "json",

      dataSource: {
        chart: {
          theme: "fusion",
          canvasbgColor: "#FF0000",
          yAxisValueFontColor: "#FFFFFF",
          divLineColor: "#FFFFFF",
          color: "#F2726F",
        },

        data: [
          {
            value: "10",
          },
          {
            value: "12",
          },
          {
            value: "40",
          },
          {
            value: "35",
          },
        ],
      },
    }).render();
  });
  const Containerid=props.da._id
  return (
    <div className="card bg-base-100 shadow-xl m-2 w-1/4">
       <div className="-m-12" id="chart-container + {{Containerid}}"></div>
    </div>
  );
};

export default Chartcard;
