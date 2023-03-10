import './FormComponenet.css';
import Pic1 from './assets/profile-images/pic1.png';
import Pic2 from './assets/profile-images/pic2.png'
import Pic3 from './assets/profile-images/pic3.png'
import Pic4 from './assets/profile-images/pic4.png'
import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom"
import EmployeeService from "../services/EmployeeService";



const FormContentPage = (props) => {
  let initialValue = {
    name: "",
    profileArray: [
      { url: "../../Assets/profile-images/Ellipse -1.png" },
      { url: "../../Assets/profile-images/Ellipse -3.png" },
      { url: "../../Assets/profile-images/Ellipse -7.png" },
      { url: "../../Assets/profile-images/Ellipse -8.png" },
    ],
    allDepartment: ["HR", "Sales", "Finance", "Engineer", "Others"],
    departmentValue: [],
    gender: "",
    salary: "",
    day: "",
    month: "",
    year: "",
    startDate: "",
    notes: "",
    id: "",
    profilePic: "",
    isUpdate: false,
  };

  const [formValue, setForm] = useState(initialValue);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getDataById(params.id);
    }
  }, [params.id]);

  const getDataById = (id) => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        let object = response.data.data;
        setData(object);
      })
      .catch((err) => {
        alert("err is ", err);
      });
  };

  const setData = (obj) => {
    let array = obj.startDate;
    console.log(array);
    console.log(obj);

    setForm({
      ...formValue,
      ...obj,
      id: obj.employeeId,
      name: obj.name,
      departmentValue: obj.departments,
      isUpdate: true,
      day: array[0] + array[1],
      month: array[3] + array[4] + array[5],
      year: array[7] + array[8] + array[9] + array[10],
      notes: obj.note,
    });
  };


  const changeValue = (event) => {
    console.log(event.target);
    console.log(event.target.name);
    setForm({ ...formValue, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    console.log("Useeffect()");
  }, []);

  const onCheckChange = (name) => {
    let index = formValue.departmentValue.indexOf(name);
    let checkArray = [...formValue.departmentValue];
    if (index > -1) checkArray.splice(index, 1);
    else checkArray.push(name);
    setForm({ ...formValue, departmentValue: checkArray });
  };

  const getChecked = (name) => {
    return (
      formValue.departmentValue && formValue.departmentValue.includes(name)
    );
  };

  const save = async (event) => {
    event.preventDefault();

    let object = {
      name: formValue.name,
      departments: formValue.departmentValue,
      gender: formValue.gender,
      salary: formValue.salary,
      startDate: `${formValue.year} ${formValue.month} ${formValue.day} `,
      note: formValue.notes,
      profilePic: formValue.profilePic,
    };

    console.log(object);

    if (formValue.isUpdate) {
      var answer = window.confirm(
        "Data once modified cannot be restored!! Do you wish to continue?"
      );
      if (answer === true) {
        EmployeeService.updateEmployee(params.id, object)
          .then((data) => {
            console.log(data.data.data);
            alert("Data updated successfully!");
          })
          .catch((error) => {
            console.log("WARNING!! Error updating the data!", error);
          });
      } else {
        window.location.reload();
      }
    } else {
      EmployeeService.addEmployee(object)
        .then((response) => {
          console.log(response);
          const empData = response.data.data;
          console.log(empData);
          alert("Data Added successfully!!");
        })
        .catch((error) => {
          console.log("WARNING!! Error while adding the data!", error);
        });
        reset();
    }
  };

  const reset = () => {
    setForm({
      ...initialValue,
      id: formValue.id,
      isUpdate: formValue.isUpdate,
    });
  };

    return (

        <div className="form-content">
          <form className="form" action="#" onSubmit={save}>
          <div className="form-head">Employee Payroll form</div>

          <div className="row-content">
              <label className="label text" htmlFor="name">Name</label>
              <input className="input" type="text" name="name" id="name" placeholder="Your Name.." required  value={formValue.name} onChange={changeValue}/>
              <error-output className="text-error" for="text"></error-output>
            </div>

          <div className="row-content">
                <label className="label text" htmlFor='profilePic'>Profile image</label>
                <div className="profile-radio-content">
                    <label>
                        <input type="radio" id="profile1" name="profilePic" value="/assets/profile-images/pic1.png" checked={formValue.profilePic==="/assets/profile-images/pic1.png"} onChange={changeValue} required></input>
                        <img className="profile" src={Pic1} alt="profile"></img>
                    </label>
                    <label>
                        <input type="radio" name="profilePic" value="/assets/profile-images/pic2.png" checked={formValue.profilePic==="/assets/profile-images/pic2.png"} onChange={changeValue} required />
                        <img className="profile" src={Pic2} alt="profilepic"/>
                    </label>
                    <label>
                        <input type="radio" name="profilePic" value="/assets/profile-images/pic3.png" checked={formValue.profilePic==="/assets/profile-images/pic3.png"} onChange={changeValue} required />
                        <img className="profile" src={Pic3} alt="profilepic"/>
                    </label>
                    <label>
                        <input type="radio" name="profilePic" value="/assets/profile-images/pic4.png" checked={formValue.profilePic==="/assets/profile-images/pic4.png"} onChange={changeValue} required />
                        <img className="profile" src={Pic4} alt="profilepic"/>
                    </label>
                </div>
          </div>

          <div className="row-content">
              <label className="label text" htmlFor="gender">Gender</label>
              <div>
                <input type="radio" name="gender" value="male"  id="male" checked={formValue.gender === "male"} onChange={changeValue} required/>
                <label className="text" htmlFor="male">Male</label>
                <input type="radio" name="gender" value="female"  id="female" checked={formValue.gender === "female"} onChange={changeValue}/>
                <label className="text" htmlFor="female">Female</label>
              </div>
          </div>
          
          <div className="row-content">
              <label className="label text" htmlFor="departments">Department</label>
              <div>
                {formValue.allDepartment.map((item) => (
                <span key={item}>
                <input className="checkbox" type="checkbox" onChange={() => onCheckChange(item)} name={item} checked={getChecked(item)} value={item} />
                <label className="text" htmlFor={item}>{item}</label>
                </span>))}
              </div>
            </div>
            
            <div className="row-content">
              <label className="label text" htmlFor="salary">Choose your salary: </label>
              <input className="input" type="range" name="salary" id="salary" 
                      max="5000000" value={formValue.salary} onChange={changeValue}/>
              <output class="salary-output text" htmlFor="salary" value={formValue.salary} onChange={changeValue}></output>
            </div>
            
            <div className="row-content">
              <label className="label text" htmlFor="startDate">Start Date</label>
              <div>
                <select id="day" name="day" value={formValue.day} onChange={changeValue}>
                  <option value="" disabled selected>Day</option>
                  <option value="01">1</option>
                  <option value="02">2</option>
                  <option value="03">3</option>
                  <option value="04">4</option>
                  <option value="05">5</option>
                  <option value="06">6</option>
                  <option value="07">7</option>
                  <option value="08">8</option>
                  <option value="09">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <select id="month" name="month" value={formValue.month} onChange={changeValue}>
                  <option value="" disabled selected>Month</option>
                  <option value="Jan">January</option>
                  <option value="Feb">February</option>
                  <option value="Mar">March</option>
                  <option value="Apr">April</option>
                  <option value="May">May</option>
                  <option value="Jun">June</option>
                  <option value="Jul">July</option>
                  <option value="Aug">August</option>
                  <option value="Sep">September</option>
                  <option value="Oct">October</option>
                  <option value="Nov">November</option>
                  <option value="Dec">December</option>
                </select>
                <select id="year" name="year" value={formValue.year} onChange={changeValue}>
                <option value="" disabled selected>Year</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                </select>
              </div>
            </div>

            <div className="row-content">
              <label className="label text" htmlFor="notes">Notes</label>
              <textarea className="input" id="notes" name="notes" onChange={changeValue} value={formValue.notes} placeholder="" style={{ height: "120%" }}></textarea>
            </div>

            <div className="buttonParent">
            <Link className="resetButton button cancelButton" to="/home" >Home </Link>           
              <div className="submit-reset">
                <button type="submit" className="button submitButton"
                 id="submitButton" >{formValue.isUpdate ? 
                 "Update" : "Submit" }
                </button>

                <button type="reset" className="resetButton button" onClick={reset}>Reset</button>
              </div>
            </div>

          </form>  
        </div>
    );
}


export default FormContentPage
