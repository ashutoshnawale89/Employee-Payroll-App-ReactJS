import React from 'react';
import Form from './components/Form';
import HomePage from './components/homeComponents/HomePage'
import { Route, Routes} from "react-router-dom"


class App extends React.Component {
  
  render(){
    return (
      <div>
        <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path="/Employeeform/:id" element={<Form />}></Route>
        </Routes>
        <HomePage/>
      </div>);
}
}

export default App;
