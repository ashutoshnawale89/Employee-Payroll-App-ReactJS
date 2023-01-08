import './FormComponenet.css';
import Pic1 from './assets/profile-images/pic1.png';
import Pic2 from './assets/profile-images/pic2.png'
import Pic3 from './assets/profile-images/pic3.png'
import Pic4 from './assets/profile-images/pic4.png'


function FormContentPage() {
    return (

        <div className="form-content">
          <form className="form" action="#" onsubmit="save()">
          <div className="form-head">Employee Payroll form</div>
          <div className="row-content">
              <label className="label text" for="name">Name</label>
              <input className="input" type="text" name="name" id="name" placeholder="Your Name.." required />
              <error-output className="text-error" for="text"></error-output>
            </div>
            <div className="row-content">
                <label className="label text">Profile image</label>
                <div className="profile-radio-content">
                    <label>
                        <input type="radio" id="profile1" name="profile" value="/assets/profile-images/pic1.png" required></input>
                        <img className="profile" id="image1" src={Pic1}></img>
                    </label>
                    <label>
                        <input type="radio" id="profile2" name="profile" value="/assets/profile-images/pic2.png" required />
                        <img className="profile" id="image2" src={Pic2}/>
                    </label>
                    <label>
                        <input type="radio" id="profile1" name="profile" value="/assets/profile-images/pic1.png" required></input>
                        <img className="profile" id="image1" src={Pic3}></img>
                    </label>
                    <label>
                    <input type="radio" id="profile2" name="profile" value="/assets/profile-images/pic2.png" required />
                        <img className="profile" id="image2" src={Pic4}/>
                    </label>
                </div>
            </div>
            <div className="row-content">
              <label className="label text" for="gender">Gender</label>
              <div>
                <input type="radio" name="gender" value="male"/>
                <label className="text" for="male">Male</label>
                <input type="radio" name="gender" value="female"/>
                <label className="text" for="female">Female</label>
              </div>
            </div>
            <div className="row-content">
              <label className="label text" for="department">Department</label>
              <div>
              <input className="checkbox" type="checkbox" name="department" id="hr" value="HR" />
                <label className="text" for="hr">HR</label>
                <input className="checkbox" type="checkbox" name="department" id="sales" value="Sales"/>
                <label className="text" for="sales">Sales</label>
                <input className="checkbox" type="checkbox" name="department" id="finance" value="Finance"/>
                <label className="text" for="finance">Finance</label>
                <input className="checkbox" type="checkbox" name="department" id="engineer" value="Engineer"/>
                <label className="text" for="engineer">Engineer</label>
                <input className="checkbox" type="checkbox" name="department" id="others" value="Others"/>
                <label className="text" for="others">Others</label>
              </div>
            </div>
            <div className="row-content">
              <label className="label text" for="salary">Choose your salary: </label>
              <input className="input" type="range" name="salary" id="salary" 
                     min="300000" max="500000" step="1000 "/>
              <output class="salary-output text" for="salary"></output>
            </div>
            <div className="row-content">
              <label className="label text" for="startDate">Start Date</label>
              <div>
                <select id="day" name="Day">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
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
                <select id="month" name="Month">
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <select id="year" name="Year">
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                </select>
              </div>
            </div>
            <div className="row-content">
              <label className="label text" for="notes">Notes</label>
              <textarea className="input" id="notes" name="Notes"></textarea>
            </div>
            <div className="buttonParent">
              <a href="/form.html" className="resetButton button cancelButton">Cancel</a>
              <div className="submit-reset">
                <button type="submit" className="button submitButton" id="submitButton">Submit</button>
                <button type="reset" className="resetButton button">Reset</button>
              </div>
            </div>
          </form>  
        </div>
    );
}


export default FormContentPage
