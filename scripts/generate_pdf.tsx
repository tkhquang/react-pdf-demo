import React from "react";
import { renderToFile } from "@react-pdf/renderer";

import Document from "../src/components/Document";

async function render() {
  try {
    await renderToFile(<Document />, "output/Output.pdf");
  } catch (err) {
    console.log(err);
  }
}

render();
