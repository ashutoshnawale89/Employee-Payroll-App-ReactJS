 import React from 'react';
import "./HomePage.css"
import logo from "./logoimages/logo.png";
import CreateLogo from './assets/icons/create-black-18dp.svg';
import DeleteLogo from './assets/icons/delete-black-18dp.svg';
import { Link } from "react-router-dom"
 
class HomePage extends React.Component {
    

    onClicks = ($event) => {
        console.log('save button is clicked!', $event);
        window.open("http://localhost:3000/form", '_blank');
      }
  
    render() {
    return(
        <div>
            <body>
                <header className="header-content header"> 
                <div className="logo-content">
                <img src={logo} alt="Emp Logo"/>
                    <div>
                        <span className="emp-text">EMPLOYEE</span><br/>
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                 </div>
                 </header>

            <div class="main-content">
                    <div className="header-content"> 
                        <div className="emp-detail-text">
                           Employee Details 
                        </div>
                        <Link className="add-button" to="/form" >
                            <img src="/assets/icons/add-24px.svg" alt=""/>
                            Add User
                        </Link> 
                    </div>
                <table id="display" className="table">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Start Date</th>
                        <th>Actions</th>
                    </tr>
                    <tr> 
                        <td><img class="profile" alt="" src="/assets/profile-images/pic2.png"/>
                        </td> 
                        <td>Narayan Mahadevan</td>
                        <td>Male</td>
                        <td><div className='dept-label'>HR</div>
                        <div className='dept-label'>Finance</div>
                        </td>
                        <td>3000000</td>
                        <td>1 Nov 2020</td>
                        <td> 
                           <img id="1" onclick="remove(this)" alt="delete" src={DeleteLogo}/>
                           <img id="1" alt="edit" onclick="update(this)" src={CreateLogo}/> 
                        </td> 
                    </tr>  
                </table>
            </div>
            </body>
        </div>
    ); }
}
    export default HomePage

   