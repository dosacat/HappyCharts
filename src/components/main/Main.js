import React from 'react'
import './Main.css';
import OrganizationChart from "@dabeng/react-orgchart";
import MyNode from "./my-node";
import helper, { hierachyTree } from '../../helper';

// https://github.com/dabeng/react-orgchart - Link to library used,
/* I tried to set draggable to {true} but it failed on firefox
*/

function Main({Employees,team,search}) {
 
  if (Employees) {

    var props = Employees
    props = helper(props,search="",team)
    props = hierachyTree(props) //convert our data to a heirachy tree, I see issues arising if more than 1 root present
    
  }
  if (!Employees) {
    return null
  }


  return (
    
    <div className='main'>
        <OrganizationChart datasource={props[0]} chartClass="myChart" NodeTemplate={MyNode}/>
    </div>
  )
}

export default Main;