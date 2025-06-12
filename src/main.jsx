import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/*

page -> Home , contactus , create recipe , recipe->update&delte , Favorite  , page not found , login logout
main routes -> routes 
components -> nav 

*/
