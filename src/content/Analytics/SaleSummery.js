import React from "react";
import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Radialbar from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Radialbar, FusionTheme);
const SaleSummery = () => {
  FusionCharts.ready(function () {
    var chart = new FusionCharts({
      type: "radialbar",
      width: "100%",
      height: "100%",
      renderAt: "chart-container7",
      dataSource: {
        chart: {
          theme: "fusion",
          caption: "Top 5 Android OS Market Share",
          subCaption: "January 2021",
          showLegend: 1,
          innerRadius: 30,
          outerRadius: 155,
          showLabels: 1,
          labelText: "<b>$label</b>",
        },
        data: [
          {
            label: "Nougat 7.0",
            value: 4.09,
          },
          {
            label: "Oreo 8.0",
            value: 5.19,
          },
          {
            label: "Marshmallow 6.0",
            value: 5.77,
          },
          {
            label: "Oreo 8.1",
            value: 9.89,
          },
          {
            label: "Pie 9.0",
            value: 21.53,
          },
        ],
      },
    }).render();
    console.log(chart);
  });
  return (
    <div className="card shadow-xl h-96 m-2 lg:w-1/2">
      <div className="card-body -mt-2">
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h2>Sales Summery</h2>
              <p className="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div>
              <label className="collapse collapse-arrow rounded-full shadow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title font-normal">
                  <span className="text-sm">Monthly</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="card-actions justify-center">
          <div className="lg:-mb-36 mr-0" id="chart-container7"></div>
        </div>
      </div>
    </div>
  );
};

export default SaleSummery;
