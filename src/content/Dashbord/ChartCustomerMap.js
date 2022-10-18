import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Splinearea from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Splinearea, FusionTheme);

const ChartCustomerMap = (props) => {
  FusionCharts.ready(function () {
    var chart = new FusionCharts({
      type: "stackedcolumn2d",
      renderAt: `chart-container6`,
      height: "320",
      dataFormat: "json",
      dataSource: {
        chart: {
         
          showSum: "1",
          theme: "fusion",
        },

        categories: [
          {
            category: [
              {
                label: "4",
              },
              {
                label: "6",
              },
              {
                label: "8",
              },
              {
                label: "10",
              },
              {
                label: "12",
              },
              {
                label: "14",
              },
              {
                label: "16",
              },
              {
                label: "18",
              },
              {
                label: "20",
              },
            ],
          },
        ],

        dataset: [
          {
           
            data: [
              {
                value: "90",
              },
              {
                value: "80",
              },
              {
                value: "70",
              },
              {
                value: "60",
              },
              {
                value: "70",
              },
              {
                value: "60",
              },
              {
                value: "50",
              },
              {
                value: "40",
              },
              {
                value: "30",
              },
              {
                value: "20",
              },
              {
                value: "-30",
              },
              {
                value: "-20",
              },
              {
                value: "-40",
              },
              {
                value: "-50",
              },
            ],
          },
          {
           
            data: [
              {
                value: "90",
              },
              {
                value: "80",
              },
              {
                value: "70",
              },
              {
                value: "60",
              },
              {
                value: "70",
              },
              {
                value: "60",
              },
              {
                value: "50",
              },
              {
                value: "40",
              },
              {
                value: "30",
              },
              {
                value: "20",
              },
              {
                value: "-30",
              },
              {
                value: "-20",
              },
              {
                value: "-40",
              },
              {
                value: "-50",
              },
            ],
          },
        ],
      },
    }).render();
    console.log(chart);
  });
  return (
    <div className="card shadow-xl h-96 m-2 lg:w-1/2">
      <div className="card-body -mt-2">
        <div className="flex justify-between items-center">
          <div>
            <h2>Customer Map</h2>
            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div>
            <label className="flex items-center shadow rounded-full px-2 py-1">
              <h2 className="mr-2">Monthly</h2>
              <h2 className="mr-2">Weekly</h2>
              <h2 className="mr-2 shadow rounded-full px-2 py-1 bg-black text-white">Today</h2>
            </label>
          </div>
        </div>

        <div className="card-actions justify-center">
          <div className="lg:-mb-36 mr-0 lg:mt-5 mt-3" id="chart-container6"></div>
        </div>
      </div>
    </div>
  );
};

export default ChartCustomerMap;
