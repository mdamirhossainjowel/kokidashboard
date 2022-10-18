import React from "react";
import { Link } from "react-router-dom";

const OrderRequest = () => {
  return (
    <div className="card lg:w-2/3 bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div>
            <h2>Recent Order Request</h2>
            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
          <div>
            <label className="collapse collapse-arrow rounded-full shadow">
              <input type="checkbox" className="peer" />
              <div className="collapse-title font-normal">
                <span className="text-sm">Newest</span>
              </div>
            </label>
          </div>
        </div>
        <div className=" lg:w-full">
          <table className="overflow-auto table lg:w-full">
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="mask mask-circle w-12 h-12 -mt-4 ml-3 bg-slate-300"></div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm text-pink-500">#0000002</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="opacity-50">Desktop Support Technician</span>
                </td>
                <td>
                  $7.4 <span className="ml-3 opacity-50">x3</span>
                </td>
                <th>
                  <button className="btn btn-xs bg-yellow-200 border-none text-yellow-500">
                    PENDING
                  </button>
                </th>
              </tr>

              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="mask mask-circle w-12 h-12 -mt-4 ml-3 bg-slate-300"></div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm  text-pink-500">#0000002</div>
                    </div>
                  </div>
                </td>
                <td>
                  Carroll Group
                  <br />
                  <span className="opacity-50">Tax Accountant</span>
                </td>
                <td>
                  $8.2 <span className="ml-3 opacity-50">x2</span>
                </td>
                <th>
                  <button className="btn btn-xs bg-green-200 border-none text-green-500">
                    Delivered
                  </button>
                </th>
              </tr>

              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="mask mask-circle w-12 h-12 -mt-4 ml-3 bg-slate-300"></div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm text-pink-500">#0000002</div>
                    </div>
                  </div>
                </td>
                <td>
                  Rowe-Schoen
                  <br />
                  <span className="opacity-50">Office Assistant I</span>
                </td>
                <td>
                  $6.4 <span className="ml-3 opacity-50">x1</span>
                </td>
                <th>
                  <div className="dropdown">
                    <label
                      tabIndex="0"
                      className="btn btn-xs bg-green-200 border-none text-green-500"
                    >
                      Delivered
                    </label>
                    <ul
                      tabIndex="0"
                      className="menu dropdown-content bg-base-100 p-2 mr-24 rounded-box"
                    >
                      <li>
                        <Link className="text-xs">Accept Order</Link>
                      </li>
                      <li>
                        <Link className="text-xs">Reject Order</Link>
                      </li>
                      <li>
                        <Link className="text-xs">Details Order</Link>
                      </li>
                    </ul>
                  </div>
                </th>
              </tr>

              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="mask mask-circle w-12 h-12 -mt-4 ml-3 bg-slate-300"></div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm  text-pink-500">#0000002</div>
                    </div>
                  </div>
                </td>
                <td>
                  Wyman-Ledner
                  <br />
                  <span className="opacity-50">Community Outreach Specialist</span>
                </td>
                <td>
                  $4.5 <span className="ml-3 opacity-50">x2</span>
                </td>
                <th>
                  <button className="btn btn-xs bg-slate-100 border-none text-slate-400">
                    CANCELED
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center text-pink-500">
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

export default OrderRequest;
