import React from 'react'
import './Main.css';
import OrganizationChart from "@dabeng/react-orgchart";
import MyNode from "./TreeNode";
import helper, { hierachyTree } from '../../utils';

// https://github.com/dabeng/react-orgchart - Link to library used,


function Main({employees,team,search}) {
 
  if (employees) {

    var props = employees
    props = helper(props,search="",team)
    props = hierachyTree(props) //convert our data to a heirachy tree, I see issues arising if more than 1 root present
    
  }
  if (!employees) {
    return null
  }


  return (
    
    <div className='main'>
        <OrganizationChart datasource={props[0]} chartClass="myChart" NodeTemplate={MyNode}/>
    </div>
  )
}

export default Main;