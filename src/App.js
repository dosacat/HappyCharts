import './App.css';
import Navbar from "./components/navbar/Navbar"; 
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import { getEmployees } from './services/employees';
import { useState,useEffect } from 'react';

function App() {
  const[Employees,setEmployees]= useState(null); //To store all retrieved employees

  useEffect(() => {
    const doGetEmployees = async () => {
      const result = await getEmployees()
      setEmployees(result);
    };
  
      doGetEmployees();
    }, []);

  return (
    <div className="container">
      
      <Navbar />
      <Sidebar props={Employees}/>
      <Main props={Employees}/>
      
    </div>
  );
}

export default App;
