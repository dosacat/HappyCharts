import './App.css';
import Navbar from "./components/navbar/Navbar"; 
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import { getEmployees } from './services/employees';
import { useState,useEffect } from 'react';

function App() {
  const[Employees,setEmployees]= useState(null); //To store all retrieved employees
  const [search, setSearch] = useState(""); //For the search bar
  const [team, setTeam] = useState('all'); //For storing drop down text

  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

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
      <Sidebar Employees={Employees} handleChange={handleChange} handleSearch={handleSearch} team={team} search={search}/>
      <Main Employees={Employees} team={team} search={search}/>
      
    </div>
  );
}

export default App;
