import React from "react";
import helper from "../../utils";
import "./Employee.css";

function Employee({ employees, filters, team }) {
  var props = employees;
  props = helper(props, filters, team);

  return (
    <>
      {props.map((prop) => (
        <div className="card" key={prop.id}>
          <div className="name">Name: {prop.name}</div>
          <div className="details">
            <div className="designation">Designation: {prop.designation}</div>
            <div className="team">Team: {prop.team}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Employee;
