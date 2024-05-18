import React from "react";

function Loading() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 animate-pulse">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-800">
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                  <div className="h-4 bg-gray-200 rounded"></div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                  <div className="h-4 bg-gray-200 rounded"></div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                  <div className="h-4 bg-gray-200 rounded"></div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                  <div className="h-4 bg-gray-200 rounded"></div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                  <div className="h-4 bg-gray-200 rounded"></div>
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                  <div className="h-4 bg-gray-200 rounded"></div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-50">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-50">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-50">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-50">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-50">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-50">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-800">
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
