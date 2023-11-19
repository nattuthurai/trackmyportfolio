"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Stock = () => {
  const [shares, setShares] = useState({
    stockName: "",
    stockPrice: "",
    dayHigh: "",
    dayLow: "",
    yearHigh: "",
    yearLow: "",
    peRatio: "",
    earningPerShare: "",
    stockStatus: "",
  });

  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new stock
        </h2>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Stock Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Stock Name"
                value={shares.stockName}
                onChange={(e) => {
                  setShares({ ...shares, stockName: e.target.value });
                }}
              />
            </div>
            <div className="w-full">
              <label
                for="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Stock Price
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Stock Price"
                value={shares.stockPrice}
                onChange={(e) => {
                  setShares({ ...shares, stockPrice: e.target.value });
                }}
              />
            </div>
            <div className="w-full">
              <label
                for="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Stock Status
              </label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected="">Select Status</option>
                <option value="ATH">All Time High</option>
                <option value="ATL">All Time Low</option>
                <option value="AllBO">All Time BreakOut</option>
                <option value="AllBD">All Time BreakDown</option>
              </select>
            </div>
            <div>
              <label
                for="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Day High
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$99"
                value={shares.dayHigh}
                onChange={(e) => {
                  setShares({ ...shares, dayHigh: e.target.value });
                }}
              />
            </div>
            <div>
              <label
                for="item-weight"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Day Low
              </label>
              <input
                type="number"
                name="item-weight"
                id="item-weight"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$9"
                value={shares.dayLow}
                onChange={(e) => {
                  setShares({ ...shares, dayLow: e.target.value });
                }}
              />
            </div>

            <div>
              <label
                for="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Year High
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$9999"
                value={shares.yearHigh}
                onChange={(e) => {
                  setShares({ ...shares, yearHigh: e.target.value });
                }}
              />
            </div>
            <div>
              <label
                for="item-weight"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Year Low
              </label>
              <input
                type="number"
                name="item-weight"
                id="item-weight"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$999"
                value={shares.yearLow}
                onChange={(e) => {
                  setShares({ ...shares, yearLow: e.target.value });
                }}
              />
            </div>
            <div>
              <label
                for="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                PE Ratio
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="9"
                value={shares.peRatio}
                onChange={(e) => {
                  setShares({ ...shares, peRatio: e.target.value });
                }}
              />
            </div>
            <div>
              <label
                for="item-weight"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Earning Per Share
              </label>
              <input
                type="number"
                name="item-weight"
                id="item-weight"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$99"
                value={shares.earningPerShare}
                onChange={(e) => {
                  setShares({ ...shares, earningPerShare: e.target.value });
                }}
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Stock
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Stock;
