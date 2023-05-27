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

    //also a function to send a patch request for drag and drop feature.

    // const update = async (id, editManager) => {
    //   const request = await axios.put(`${ baseUrl }/${id}`, editManager)
    //   return request.then(response => response.data)
    // }
  
  }
export {getEmployees};