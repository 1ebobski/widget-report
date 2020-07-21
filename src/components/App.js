import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";

import PagesTable from "./PagesTable.js";
import TextField from "@material-ui/core/TextField";
import LoginForm from "./LoginForm.js";
import PeriodSelector from "./PeriodSelector.js";
// import { ProgressPlugin } from "webpack";

const App = (props) => {
  // displayWidgetTable = () => {
  //   this.setState({ displayWidgetTable: !this.state.displayWidgetTable });
  // };

  return (
    <div className='page'>
      <Header />
      <Main {...props} />
      {/* <PagesTable url={props.widgetUrl} tableType={"widget"} /> */}
      <footer />
    </div>
  );
};

export default App;
