import React from "react";
import ReactDOM from "react-dom";

import "./index.js";
import App from "./App";

//we're using the <App/> element which imported from the App file

// second args tells react where it shold be rendered in the DOM, whic in this case is in the single html file created by react

// so basically this line means that we want to render the item thats in our app file to the root div thats in the html
//hence if we inspect we'll see our div inside the root div

ReactDOM.render(<App />, document.getElementById("root"));
