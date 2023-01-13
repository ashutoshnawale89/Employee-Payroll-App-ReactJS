 import React ,{ Component } from 'react';
import "./HomePage.css"
import logo from "../FormComponents/logoimages/logo.png";
import { Link } from "react-router-dom"
import EmployeeService from '../services/EmployeeService'
import Display from './Display'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          AllEmployeeArray: []
        };
      }

      componentDidMount() {
        console.log("Life cycle method");
        this.getAllEmployee();
      }

      getAllEmployee = () => {
        EmployeeService.getAllEmployees()
          .then((response) => {
            this.setState({
              AllEmployeeArray: response.data.data
            });
            console.log(response);
          })
          .catch((err) => {
            alert("Something went wrong, while getting all the records", err);
          });
      };

    render() {
        console.log("====================================");
        console.log("Render method");
        console.log("====================================");
    return(
        <div>
            <body>
          <header class="header-content header">
            <div class="logo-content">
              <Link to="/home">
                <img src={logo} alt="" />
              </Link>
              <div>
                <span class="emp-text">EMPLOYEE</span>
                <br />
                <span class="emp-text emp-payroll">PAYROLL</span>
              </div>
            </div>
          </header>
          <div class="main-content">
            <div class="header-content sub-main-content">
              <div class="emp-details-text">
                Employee Details
                <div class="emp-count"></div>
              </div>

              <Link className="add-btn" to="/form">
                <div>Add User</div>
              </Link>
            </div>
            <div class="table-main">
              <Display
                employeeArray={this.state.AllEmployeeArray}
                getAllEmployee={this.getAllEmployee}
              />
            </div>
          </div>
        </body>
        </div>
    ); }
}

    export default HomePage

   