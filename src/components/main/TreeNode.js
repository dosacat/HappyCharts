import React from "react";
import PropTypes from "prop-types";
import "./TreeNode.css";

const propTypes = {
  nodeData: PropTypes.object.isRequired,
};

const MyNode = ({ nodeData }) => {
  return (
    <div onClick={(e) => console.log(e)}>
      <div className="fullname">{nodeData.name}</div>
      <div className="position">{nodeData.designation}</div>
      <div className="position">{nodeData.team}</div>
    </div>
  );
};

MyNode.propTypes = propTypes;

export default MyNode;
