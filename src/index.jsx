import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { ReactDOM } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./app.css";
import "boxicons";

const root = createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
