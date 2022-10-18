import React from "react";

const LoyalCustomer = () => {
  return (
    <div className="card bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <div>
          <h2 className="font-bold">Loyal Customers</h2>
          <p className="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="mask mask-squircle w-12 h-12 bg-slate-300"></div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <lable className="text-sm text-pink-400">651 times order</lable>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="mask mask-squircle w-12 h-12 bg-slate-300"></div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <lable className="text-sm text-pink-400">651 times order</lable>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="mask mask-squircle w-12 h-12 bg-slate-300"></div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <lable className="text-sm text-pink-400">651 times order</lable>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="mask mask-squircle w-12 h-12 bg-slate-300"></div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <lable className="text-sm text-pink-400">651 times order</lable>
                    </div>
                  </div>
                </td>
              </tr>

             
            </tbody>
          </table>
          <div className="-mt-14 flex justify-center text-pink-500">
            <label className="collapse collapse-arrow">
              <div className="collapse-title font-normal">
                <span className="text-sm underline">View more</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyalCustomer;
