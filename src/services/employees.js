// import axios from 'axios' - usually I would use axios
// const baseUrl = '"" and this would be the base url

import UserDB from "../config/db";

let data = UserDB()
  
  function delay(time){
    return new Promise((resolve)=>{
        setTimeout(resolve,time)
    });
  }
  
  async function getEmployees(){
    // Normally i would do this 
    // const request = await axios.get(baseUrl)
    // return request.data;
    //But for the purpose of this asignment
    await delay(300);
    return data
  
  }
export {getEmployees};