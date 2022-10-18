import React from "react";
import DailyTrends from "../Dashbord/DailyTrends";
import AnalyticsNavber from "./AnalyticsNavber";
import AnalyticsSummery from "./AnalyticsSummery";
import BestSaler from "./BestSaler";

const Analytics = () => {
  return (
    <div className="m-2">
      <AnalyticsNavber />
      <div className="lg:flex w-auto">
        <AnalyticsSummery />
        <div className="w-auto">
          <DailyTrends />
          <BestSaler />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
