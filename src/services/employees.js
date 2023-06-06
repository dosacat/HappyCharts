import UserDB from "../config/db";

let data = UserDB()
  
  function delay(time){
    return new Promise((resolve)=>{
        setTimeout(resolve,time)
    });
  }
  
  async function getEmployees(){
    await delay(300);
    return data
  
  }
export {getEmployees};