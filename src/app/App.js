import { Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./layouts/homeScreen";
import FormsScreen from "./layouts/formsScreen";
import React from "react";
import history from "./utils/history";
function App() {
  console.log(history);
  return (
    <div className="main-container">
      <Route
        path={history.location.pathname || "/"}
        exact
        component={HomeScreen}
      />
      <Route
        path={history.location.pathname || "/create"}
        component={FormsScreen}
      />
    </div>
  );
}

export default App;
