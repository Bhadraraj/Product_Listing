
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// import { store } from "./store/store";
import { Provider } from "react-redux";
import  store  from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Now store is accessable to the all the child of app  */}
      <App />
    </Provider>
  </React.StrictMode>
);
