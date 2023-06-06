// I definitely feel there's a better way to do this.
function helper(props,filters,team){
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
      return props
}

function hierachyTree(props) {
    var tree = []
    var chartEmployees = {} //To store the compatible DS
    
  
    props.forEach( function(user) {
      var id = user.id;
      if (!chartEmployees.hasOwnProperty(id)) { // in case of duplicates
        chartEmployees[id] = user;
        chartEmployees[id].children = []; //Add chilren 
      }
    })
  
    // If root-level items are not included in hash table, include them
    // If root-level nodes are not included in hash table, include them
    props.forEach(function(user) {
      var managerId = user.manager;
      if (!chartEmployees.hasOwnProperty(managerId)) {
        // make up an item for root-level node
        var newRoot = {};
        newRoot.Id = managerId;
        newRoot.name = user.team;
        newRoot.manager = null;
        chartEmployees[managerId] = newRoot; // the parent id as key, and made-up an item as value
        chartEmployees[managerId].children = []; 
      }
    })
  
  
  
    
  
    for (let id in chartEmployees) {
  
      if (chartEmployees.hasOwnProperty(id)) {
        var cEmployee = chartEmployees[id];
  
        if (cEmployee.manager) { //if manager exists- find parent id
          var managerId = cEmployee.manager;// locate the parent item in
          chartEmployees[managerId].children.push(cEmployee);  
  
        }
        else { 
          tree.push(cEmployee );
        }
      }
    }
    return tree
  }
  
export {hierachyTree};
export default helper;
