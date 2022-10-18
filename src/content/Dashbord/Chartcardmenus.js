import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Splinearea from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Splinearea, FusionTheme);

const Chartcardmenus = () => {
  FusionCharts.ready(function () {
    var chart = new FusionCharts({
      type: "splinearea",
      renderAt: "chart-container1",
      dataFormat: "json",
      //  the chart  width: "310", //width of
      height: "120",
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
            value: "10",
          },
          {
            value: "10",
          },
          {
            value: "20",
          },
          {
            value: "25",
          },
          {
            value: "22",
          },
          {
            value: "21",
          },
          {
            value: "26",
            color: "#e44a00",
          },
          {
            value: "18",
            color: "#e44a00",
          },
          {
            value: "15",
            color: "#e44a00",
          },
          {
            value: "13",
            color: "#e44a00",
          },
          {
            value: "17",
            color: "#e44a00",
          },
        ],
      },
    }).render();
    console.log(chart);
  });
  return (
    <div className="card shadow-xl m-2 h-44 lg:w-1/4">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="card-title">
              56 <span className="text-green-500 text-xs">+4%</span>
            </h2>
            <h2>Menus</h2>
          </div>
          <div >
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
            </svg>
          </div>
        </div>
        <div className="card-actions justify-center mt-3">
          <div className="-mb-36 mr-0" id="chart-container1"></div>
        </div>
      </div>
    </div>
  );
};

export default Chartcardmenus;
