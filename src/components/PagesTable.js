import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
import { getThemeProps } from "@material-ui/styles";

const PagesTable = ({ pagesUrl, widgetUrl, accessToken }) => {
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
        сlear: ClearIcon,
        SortArrow: ArrowDownward,
        DetailPanel: ChevronRight,
      }}
      // title= {tableType === "page" ? 'Pages table' : "Widget table"},
      title='Pages'
      columns={[
        {
          title: "Name",
          field: "Page",
          sorting: false,

          // render: (rowData) => (
          //   <a href={"https://" + rowData.Page}>{rowData.Page}</a>
          // ),
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
        {
          title: "Average time, min",
          field: "AvgTimeOnPage",
        },
      ]}
      data={(query) =>
        new Promise((resolve, reject) => {
          // let pagesUrl = "https://reqres.in/api/users?";
          // pagesUrl += "per_page=" + query.pageSize;
          // pagesUrl += "&page=" + (query.page + 1);

          // console.log(pagesUrl);
          fetch(pagesUrl, {
            headers: { Authorization: "Bearer" + " " + accessToken },
          })
            .then((response) => {
              // console.log(response);
              return response.json();
            })
            .then((result) => {
              // console.log(result);
              resolve({
                data: result.Query.slice(0, 25),
                // page: result.page - 1,
                page: 0,
                // totalCount: result.total,
                totalCount: result.length,
              });
            })
            .catch((err) => {
              console.log(err);
              reject(err);
            });
        })
      }
      detailPanel={[
        {
          tooltip: "Show widget data",
          render: (rowData) => {
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
                options={{
                  paging: false,
                  search: false,
                }}
                data={(query) =>
                  new Promise((resolve, reject) => {
                    // let widgetUrl = "https://reqres.in/api/users?";
                    // widgetUrl += "per_page=" + query.pageSize;
                    // widgetUrl += "&page=" + (query.page + 1);

                    // console.log(widgetUrl);
                    fetch(widgetUrl + "&page=" + rowData.Page, {
                      headers: { Authorization: "Bearer" + " " + accessToken },
                    })
                      .then((response) => response.json())
                      .then((result) => {
                        // console.log(result);
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
                title='Widgets'
                columns={[
                  {
                    title: "Name",
                    field: "Widget",
                    render: (rowData) => (
                      <a href={"https://" + rowData.Page}>{rowData.Widget}</a>
                    ),
                  },
                  {
                    title: "Widgetviews / Pageviews, %",
                    field: "Widgetviews",
                    render: (rowData) =>
                      Math.round(
                        10000 * (rowData.Widgetviews / rowData.Pageviews)
                      ) / 100,
                  },
                  {
                    title: "Linkclicks / Widgetviews, %",
                    field: "BounceRate",
                    render: (rowData) =>
                      Math.round(
                        10000 * (rowData.Clicks / rowData.Widgetviews)
                      ) / 100,
                  },
                ]}
              />
            );
          },
        },
        // {
        //   icon: 'account_circle',
        //   tooltip: 'Go to page',
        //   render: rowData => {
        //     return (
        //       <div
        //         style={{
        //           fontSize: 100,
        //           textAlign: 'center',
        //           color: 'white',
        //           backgroundColor: '#E53935',
        //         }}
        //       >
        //         {rowData.surname}
        //       </div>
        //     )
        //   },
        // },
      ]}
      // onRowClick={(event, rowData, togglePanel) => togglePanel()}
      options={{
        sorting: true,
        search: true,
        paging: false,
      }}
    />
  );
  // }
};

export default PagesTable;
