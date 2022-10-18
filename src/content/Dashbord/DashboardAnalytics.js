import React from "react";
// import Chartcard from "./Chartcard";
import ChartcardGrap from "./ChartcardRevenue";
import DailyTrends from "./DailyTrends";
import DashbordNavber from "./DashbordNavber";
import OrderRequest from "./OrderRequest";

import ChartcardOrder from "./ChartcardOrder";
import Chartcardmenus from "./Chartcardmenus";
import ChartcardCustomers from "./ChartcardCustomers";
import Chartcardincome from "./Chartcardincome";
import ChartCustomerMap from "./ChartCustomerMap";

const DashboardAnalytics = () => {
  // const data = [
  //   { _id: 1, name: "John", number: 34, plus: 31, icon: "New York" },
  //   { _id: 2, name: "John1", number: 34, plus: 31, icon: "New York" },
  //   { _id: 3, name: "John2", number: 34, plus: 31, icon: "New York" },
  //   { _id: 4, name: "John3", number: 34, plus: 31, icon: "New York" },
  // ];
  // const data1 = [
  //   { _id: 5, name: "John", number: 34, plus: 31, icon: "New York" },
  //   { _id: 6, name: "John1", number: 34, plus: 31, icon: "New York" }

  // ];

  return (
    <div className="m-2">
      <DashbordNavber />
      <div className=" lg:flex">
        {/* {data?.map((da) => (
          <Chartcard key={da._id} da={da}></Chartcard>
        ))} */}
          <Chartcardmenus></Chartcardmenus>
          <ChartcardOrder></ChartcardOrder>
          <ChartcardCustomers></ChartcardCustomers>
          <Chartcardincome></Chartcardincome>

      </div>
      <div className="lg:flex">
        {/* {data1?.map((da) => (
          <ChartcardGrap key={da._id} da={da}></ChartcardGrap>
        ))} */}
          <ChartcardGrap></ChartcardGrap>
          <ChartCustomerMap></ChartCustomerMap>

      </div>
      <div className="lg:flex">
      <OrderRequest/>
      <DailyTrends/>
      </div>
    </div>
  );
};
export default DashboardAnalytics;
