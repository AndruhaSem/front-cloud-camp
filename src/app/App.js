import { Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./layouts/homeScreen";
import FormsScreen from "./layouts/formsScreen";
import React from "react";
import history from "./utils/history";
function App() {
  return (
    <div className="main-container">
      {/* <BrowserRouter basename={history.location.pathname || ""}> */}
      <Route path="/create" component={FormsScreen} />
      <Route path="/" exact component={HomeScreen} />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
