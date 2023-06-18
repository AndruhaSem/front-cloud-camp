import { Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./layouts/homeScreen";
import FormsScreen from "./layouts/formsScreen";
import React from "react";
function App() {
  return (
    <div className="main-container">
      <BrowserRouter basename={window.location.pathname || ''}>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/create" component={FormsScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
