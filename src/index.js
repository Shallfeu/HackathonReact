import React from "react";
// Libs
// Libs
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// Components
import App from "./app/App";
import { store } from "./app/store/store";
import { customHistory } from "./app/utils/CustomHistory";
//  Styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter history={customHistory}>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
);
