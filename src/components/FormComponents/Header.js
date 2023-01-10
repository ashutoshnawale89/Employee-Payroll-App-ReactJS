import logo from './assets/images/logo.png'
import './FormComponenet.css';


function HeaderPage() {
    return (
        <div>
            <header class="header-content header">
                <div class="logo-content">
                    <img src={logo} alt='The EmployeePayroll App Logo'/>
                <div>
                    <span class="emp-text">EMPLOYEE</span>
                    <br/>
                    <span class="emp-text emp-payroll">PAYROLL</span>
                </div>
                {/* <h1>
                  <Link to={HomePag}>HomePage </Link>
                </h1> */}
                </div>
            </header>
        </div>
    )
}
export default HeaderPage;