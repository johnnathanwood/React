import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import EmployeeList from './components/employee/EmployeeList';
import Kennel from "./components/Kennel"

ReactDOM.render(<EmployeeList />, document.querySelector("#root"));

ReactDOM.render(<Kennel />, document.querySelector("#root"));





