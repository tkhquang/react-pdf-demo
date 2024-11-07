import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";

import Document from "./components/Document";

const App = () => (
  <PDFViewer width="595px" height="842px">
    <Document />
  </PDFViewer>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
