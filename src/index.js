import React from 'react'
import ReactDOM from "react-dom";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<div>hola</div>, wrapper) : false;