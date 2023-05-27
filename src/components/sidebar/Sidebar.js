import React from 'react'
import './Sidebar.css';
import { useState } from 'react';
import Employee from '../employee/Employee';

function Sidebar({props}) {

    const Employees=props
    const [search, setSearch] = useState(""); //For the search bar
    const [team, setTeam] = React.useState('all'); //For storing drop down text

  const handleChange = (event) => {
      setTeam(event.target.value);
      console.log(team)
    };
  
  if (!Employees) {
    return null;
  }
  else{
    var teams = new Set()
    Employees.map((elem,i)=>teams.add(elem.team)) // For ensuring unique drop-down elements., should this have been in state instead? I think so
  }

  return (
    <div className='sidebar'>

        <div className='filters'>

        {/* search component */}
        <input id="search-bar" value={search} placeholder={"search..."} onChange={(e) => setSearch(e.target.value)}/>
        {/* search component */}

        {/* Separate into Dropdown component */}
        <select id="select" value={team} onChange={handleChange}>
            <option value="all">All</option>
            {[...teams].map((option,i) => ( //There is possibly a better way to do this. 
            <option value={option} key={option.id}>{option}</option>))}
        </select>
        {/* Separate into Dropdown component */}

        </div>
        <div className='employee-list'>
            <Employee employees={Employees} filters={search} team={team}/>
        </div>
    </div>
  )
}

export default Sidebar;