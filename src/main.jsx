// import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	// <StrictMode>
	<HelmetProvider>
		<Router>
			<App />
		</Router>
	</HelmetProvider>
	//  </StrictMode>
);
