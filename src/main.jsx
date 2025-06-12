import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App/>
        <ToastContainer/>
        
    </BrowserRouter>
);


/*

page -> Home , contactus , create recipe , recipe->update&delte , Favorite  , page not found , login logout
main routes -> routes 
components -> nav 

*/