import React from "react";
import PeriodSelector from "./PeriodSelector.js";
import PagesTable from "./PagesTable.js";

const Main = (props) => {
  console.log(props);
  return (
    <main className='main'>
      <PeriodSelector />
      <PagesTable {...props} />
    </main>
  );
};

export default Main;
