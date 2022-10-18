import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Splinearea from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Splinearea, FusionTheme);

const ChartcardGrap = (props) => {
  FusionCharts.ready(function () {
    var chart = new FusionCharts({
      type: "mssplinearea",
      renderAt: `chart-container5`,
      // width: "680",
      height: "280",
      dataFormat: "json",
      dataSource: {
        chart: {
          theme: "fusion",
          showXAxisLine: "1",
          toolTipColor: "#ffffff",
          toolTipBorderThickness: "0",
          toolTipBgColor: "#000000",
          toolTipBgAlpha: "80",
          toolTipBorderRadius: "2",
          toolTipPadding: "5",
        },

        categories: [
          {
            category: [
              {
                label: "Jan",
              },
              {
                label: "Feb",
              },
              {
                label: "Mar",
              },
              {
                label: "Apr",
              },
              {
                label: "Jun",
              },
              {
                label: "Jul",
              },
              {
                label: "Aug",
              },
              {
                label: "Sep",
              },
              {
                label: "Oct",
              },
            ],
          },
        ],
        dataset: [
          {
            seriesname: "Income",
            data: [
              {
                value: "15123",
              },
              {
                value: "14233",
              },
              {
                value: "21507",
              },
              {
                value: "9110",
              },
              {
                value: "14829",
              },
              {
                value: "17503",
              },
              {
                value: "20202",
              },
              {
                value: "20202",
              },
              {
                value: "20202",
              },
            ],
          },
          {
            seriesname: "Expense",
            data: [
              {
                value: "11400",
              },
              {
                value: "12800",
              },
              {
                value: "17800",
              },
              {
                value: "10400",
              },
              {
                value: "11800",
              },
              {
                value: "13100",
              },
              {
                value: "20800",
              },
              {
                value: "13100",
              },
              {
                value: "20800",
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
        <div>
        <div className="flex justify-between items-center">
          <div >
            <h2 >Revenue</h2>
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
        <div className="flex justify-center items-center">
          <div className="mr-16 items-center">
            <h2 className="text-xs ml-6">Income</h2>
            <p className="font-bold text-xl">$561,623</p>
          </div>
          
          <div className="items-center"> 
            <h2 className="text-xs ml-6">Expenses</h2>
            <p className="font-bold text-xl">$126,621</p>
          </div>
        </div>
        </div>
        
        <div className="card-actions justify-center">
          <div className="lg:-mb-36 mr-0" id="chart-container5"></div>
        </div>
      </div>
    </div>
  );
};

export default ChartcardGrap;
