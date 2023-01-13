import React, { useEffect } from "react";
import "./Display.css"
import CreateLogo from '../FormComponents/assets/icons/create-black-18dp.svg';
import DeleteLogo from '../FormComponents//assets/icons/delete-black-18dp.svg';
import Pic1 from '../FormComponents/assets/profile-images/pic1.png';
import Pic2 from '../FormComponents/assets/profile-images/pic2.png'
import Pic3 from '../FormComponents/assets/profile-images/pic3.png'
import Pic4 from '../FormComponents/assets/profile-images/pic4.png'
import { useNavigate } from "react-router-dom"
import EmployeeService from '../services/EmployeeService'

const Display = (props) => {
    let navigate = useNavigate();
    
    const update = (employeeId) => {
        navigate(`Employeeform/${employeeId}`)
    }
    
    const remove = (employeeId) => {
        console.log(employeeId);
        var answer = window.confirm(
            "Data once deleted cannot be restored!! Do you wish to continue ?"
            );
        if (answer === true){
            EmployeeService.deleteEmployee(employeeId)
            .then((data) => {
              alert("Employee deleted successfully!!");
              window.location.reload();
              props.getAllEmployees();
            })
            .catch((error) => {
              console.log("Something Went Wrong!");
            });
        } else {
          alert("Employee Not Deleted");
        }
      };


    return(
        <div>
            <table id="display" className="display">
                <thead>
                    <tr>
                        <th>Profile Image</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Departments</th>
                        <th>Salary</th>
                        <th>Start Date</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
               </thead>
               <tbody>
                {props.employeeArray && 
                props.employeeArray.map((employees, index) => (
                    <tr key={`${index}`}>
                        <td>
                            <img
                            className="profile"
                            src={
                            employees.profilePic ===
                            "/assets/profile-images/pic1.png"
                            ? Pic1
                            : employees.profilePic ===
                            "/assets/profile-images/pic2.png"
                            ? Pic2
                            : employees.profilePic ===
                            "/assets/profile-images/pic3.png"
                            ? Pic3
                            : Pic4
                            } 
                            alt=""/>
                        </td>

                        <td>{employees.name}</td>
                        <td className="gender">{employees.gender}</td>
                        <td>
                           {employees.departments &&
                           employees.departments.map((dept) => (
                           <div className="dept-label">{dept}</div>))}
                        </td>
                        <td> ₹{employees.salary}</td>
                        <td>{employees.startDate}</td>
                        <td>{employees.note}</td>
                        <td>
                            <img
                            onClick={() => remove(employees.employeeId)}
                            src={DeleteLogo}
                            alt="delete"/>
                            <img
                            onClick={() => update(employees.employeeId)}
                            src={CreateLogo}
                            alt="edit"/>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ); }

    export default Display