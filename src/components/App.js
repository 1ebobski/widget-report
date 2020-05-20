import React from "react";
import Header from "./Header.js";
import PagesTable from "./PagesTable.js";
// import { ProgressPlugin } from "webpack";

const App = (props) => {
  return (
    <div className='page'>
      <Header />
      <PagesTable url={props.url} />
    </div>
  );
};

export default App;
