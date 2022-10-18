import React from "react";

const BestSaler = () => {
  return (
    <div className="card bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <div>
          <h2 className="font-bold">Best Seler Menues</h2>
          <p className="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="h-32 bg-slate-300 p-3"></div>
          <div className="card-body">
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="h-32 bg-slate-300 p-3"></div>
          <div className="card-body">
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSaler;
