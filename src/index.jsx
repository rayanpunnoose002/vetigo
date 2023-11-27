import React from "react";
import ReactDOMClient from "react-dom/client";
import { VetigoDating } from "./screens/VetigoDating";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<VetigoDating />);
