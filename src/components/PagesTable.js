import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
// import Link from "@material-ui/core";

import Search from "@material-ui/icons/Search";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import FilterList from "@material-ui/icons/FilterList";
import ClearIcon from "@material-ui/icons/Clear";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

import { pages } from "./temp-data.js";

// getPages() {
//     return fetch(this._options.url)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         return Promise.reject(`Ошибка: ${response.status}`);
//       })

//       .catch((err) => console.log(err));
//   }

const PagesTable = ({ url }) => {
  // const [hasError, setError] = useState(false);
  // const [pagesData, setPagesData] = useState({});

  // async function fetchData(url) {
  //   const res = await fetch(url);
  //   res
  //     .json()

  //     .then((res) => setPagesData(res.Query.slice(0, 5)))
  //     .catch((err) => setError(err));
  // }

  // useEffect(() => {
  //   fetchData(url);
  // }, []);

  // useEffect(() => {
  //   console.log("pagesData: " + JSON.stringify(pagesData), hasError);
  //   console.log("pages: " + JSON.stringify(pages));
  // }, [pagesData]);

  // return (
  //   <div>
  //     <span>{JSON.stringify(data)}</span>
  //     <hr />
  //     <span>Has error: {JSON.stringify(hasError)}</span>
  //   </div>
  // );

  // if (Object.keys(pagesData).length === 0 && pagesData.constructor === Object) {
  return (
    <MaterialTable
      icons={{
        Filter: FilterList,
        FirstPage: FirstPage,
        LastPage: LastPage,
        NextPage: ChevronRight,
        PreviousPage: ChevronLeft,
        Search: Search,
        Сlear: ClearIcon,
        SortArrow: ArrowDownward,
      }}
      title='Pages report'
      columns={[
        {
          title: "Name",
          field: "Page",
          sorting: false,
          // render: rowData => <Link href={rowData.name}>{rowData.name}</Link>
        },
        { title: "Pageviews", field: "Pageviews" },
        { title: "Bounce rate, %", field: "BounceRate" },
        {
          title: "Exits, %",
          field: "ExitRate",
        },
        {
          title: "Average time, min",
          field: "AvgTimeOnPage",
        },
      ]}
      // data={
      //   pagesData.length > 0
      //     ? pagesData.map((page) => {
      //         page.Page,
      //           page.Pageviews,
      //           page.BounceRate,
      //           page.ExitRate,
      //           page.AvgTimeOnPage;
      //       })
      //     : null
      // }
      data={(query) =>
        new Promise((resolve, reject) => {
          // let url = "https://reqres.in/api/users?";
          // url += "per_page=" + query.pageSize;
          // url += "&page=" + (query.page + 1);
          fetch(url)
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
              resolve({
                data: result.Query.slice(0, 25),
                // page: result.page - 1,
                page: 0,
                // totalCount: result.total,
                totalCount: result.length,
              });
            });
        })
      }
      options={{
        sorting: true,
      }}
    />
  );
  // }
};

export default PagesTable;
