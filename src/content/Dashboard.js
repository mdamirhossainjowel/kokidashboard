import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <div className="py-4 px-3 w-48 bg-[#EA4989] rounded text-white overflow-hidden">
          <Link to="/" className="flex items-center pl-2.5 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 mr-2 "
              viewBox="0 0 512 512"
            >
              <path d="M176 56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24zm24 48h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zM56 176H72c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24zM0 283.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4zM224 200c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24zm-96 0c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H104c-13.3 0-24-10.7-24-24s10.7-24 24-24zm216 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24zm120 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H392c-13.3 0-24-10.7-24-24s10.7-24 24-24zM296 32h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
            </svg>
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Koki
            </span>
          </Link>
          <ul className="space-y-2">
            <li>
              <Link
                to="dashboard"
                className="flex items-center p-2  font-normal  rounded-lg "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM96 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm352-32c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center p-2  font-normal  rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M.361 256C.361 397 114 511 255 511C397 511 511 397 511 256C511 116 397 2.05 255 2.05C114 2.05 .361 116 .361 256zM192 150V363H149V150H192zM234 150H362V193H234V150zM362 235V278H234V235H362zM234 320H362V363H234V320z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Order</span>
                <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium rounded-full">
                  63
                </span>
              </Link>
            </li>
            <li>
              <div className="collapse collapse-arrow">
                <input type="checkbox" className="peer" />

                <div className="collapse-title flex items-center p-2  font-normal  rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M.361 256C.361 397 114 511 255 511C397 511 511 397 511 256C511 116 397 2.05 255 2.05C114 2.05 .361 116 .361 256zM192 150V363H149V150H192zM234 150H362V193H234V150zM362 235V278H234V235H362zM234 320H362V363H234V320z" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Menus</span>
                </div>
                <div className="collapse-content ">
                  <p>hello</p>
                </div>
              </div>
            </li>

            <li>
              <div className="collapse collapse-arrow">
                <input type="checkbox" className="peer" />

                <div className="collapse-title flex items-center p-2  font-normal  rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M.361 256C.361 397 114 511 255 511C397 511 511 397 511 256C511 116 397 2.05 255 2.05C114 2.05 .361 116 .361 256zM192 150V363H149V150H192zM234 150H362V193H234V150zM362 235V278H234V235H362zM234 320H362V363H234V320z" />
                  </svg>{" "}
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Customers
                  </span>
                </div>
                <div className="collapse-content ">
                  <div>
                    <p>Add New</p>
                  </div>
                  <div>
                    <p>Members</p>
                  </div>
                  <div>
                    <p>General Customers</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="analytics" className="collapse collapse-arrow">
                <input type="checkbox" className="peer" />

                <div className="collapse-title flex items-center p-2  font-normal  rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M.361 256C.361 397 114 511 255 511C397 511 511 397 511 256C511 116 397 2.05 255 2.05C114 2.05 .361 116 .361 256zM192 150V363H149V150H192zM234 150H362V193H234V150zM362 235V278H234V235H362zM234 320H362V363H234V320z" />
                  </svg>{" "}
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Analytics
                  </span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="p-4 mt-2 bg-pink-600 rounded-lg items-center">
            <p className="mb-3 text-sm text-white text-center ">
              Organize your menus <br /> through button below
            </p>
            <button className="btn text-sm bg-white text-black rounded-full px-4 ml-3">
              +Add Menu
            </button>
          </div>
          <div className="p-4 mt-2 items-center">
            <p className="mb-3 text-sm text-white text-center ">
              Koki Resturent Admin Dashboard
            </p>
            <p>© 2022 - All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
