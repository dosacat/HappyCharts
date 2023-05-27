import React from 'react'
import './Employee.css';

function Employee({employees,filters,team}) {
  var props = employees

  //There should be a more efficient way to this
  if(filters!=="" && team==="all"){
    props = props.filter(obj => Object.values(obj).some(val => typeof val === 'string' && val.toLowerCase().includes(filters.toLowerCase())));
  }
  else if(filters==="" && team!=="all"){
    props = props.filter(obj=> Object.values(obj).some(val => val===team))
  }
  else if(filters!=="" && team!=="all"){
    props = props.filter(obj=> Object.values(obj).some(val => val===team))
    props = props.filter(obj => Object.values(obj).some(val => typeof val === 'string' && val.toLowerCase().includes(filters.toLowerCase())));
  }
    
  return (
    <>
    {props.map((prop,i) => (
    <div className="card" key={prop.id}>
        <div className="name">Name: {prop.name}</div>
        <div className='details'>
            <div className="designation">Designation: {prop.designation}</div>
            <div className="team">Team: {prop.team}</div>
        </div>
    </div>
    ))}
    </>
  )
}

export default Employee;