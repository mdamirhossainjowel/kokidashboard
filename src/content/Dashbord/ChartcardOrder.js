import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Splinearea from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Splinearea, FusionTheme);

const ChartcardOrder = () => {
  FusionCharts.ready(function () {
    var chart = new FusionCharts({
      type: "splinearea",
      renderAt: "chart-container2",
      dataFormat: "json",
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
            value: "15",
            color: "#e44a00",
          },
          {
            value: "15",
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
              785 <span className="text-green-500 text-xs">+2,7%</span>
            </h2>
            <h2>Orders</h2>
          </div>
          <div>
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.2-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8V488c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.2 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z" />
            </svg>
          </div>
        </div>
        <div className="card-actions justify-center mt-3">
          <div className="lg:-mb-36 mr-0" id="chart-container2"></div>
        </div>
      </div>
    </div>
  );
};

export default ChartcardOrder;
