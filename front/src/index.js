import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { setup } from "goober";

setup(React.createElement);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);