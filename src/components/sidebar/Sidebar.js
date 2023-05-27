import React from 'react'
import './Sidebar.css';
import Employee from '../employee/Employee';
import Dropdown from '../dropdown/Dropdown';
import Searchbar from '../searchbar/Searchbar';

function Sidebar({Employees,handleChange,team,search,handleSearch}) {
 
  if (!Employees) {
    return null;
  }
  else{
    var teams = new Set()
    Employees.map((elem,i)=>teams.add(elem.team)) // For ensuring unique drop-down elements., should this have been in state instead in parent? I think so
  }

  return (
    <div className='sidebar'>

      <div className='filters'>
        <Searchbar search={search} handleSearch={handleSearch}/>
        <Dropdown handleChange={handleChange} teams={teams} team={team}/>
      </div>
      <div className='employee-list'>
        <Employee employees={Employees} filters={search} team={team}/>
      </div>
    </div>
  )
}

export default Sidebar;