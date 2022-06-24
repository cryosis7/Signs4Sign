import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import reportWebVitals from "./reportWebVitals";
import { Vocabulary } from "./components/Vocabulary/Vocabulary";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SignRoute } from "./routes/SignRoute";
import { SearchRoute } from "./routes/SearchRoute";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Vocabulary />}>
          <Route path="search">
            <Route path=":searchTerm" element={<SearchRoute />} />
          </Route>
          <Route path="sign">
            <Route path=":signName" element={<SignRoute />} />
          </Route>
        </Route>
        {/*<Route path="/" element={<Vocabulary/>} />*/}
        {/*<Route path="*" element={<Navigate replace to={'/'}/>} />*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
