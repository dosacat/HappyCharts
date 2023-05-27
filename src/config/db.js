function UserDB() {
    let users = [
        {id:1, name:"Ina", designation:"CEO", team:"Management", manager:null},
        {id:2, name:"Mina", designation:"Director", team:"Management", manager:1},
        {id:3, name:"Bunty", designation:"Director", team:"HR", manager:1},
        {id:4, name:"Rahul", designation:"Director", team:"Management", manager:2},
        {id:5, name:"Sheela", designation:"Employee", team:"Management", manager:2},
        {id:6, name:"Nikita", designation:"Employee", team:"Technology", manager:1},
        {id:7, name:"Rohit", designation:"Employee", team:"HR", manager:3},
        {id:8, name:"Andrew", designation:"Employee", team:"Technology", manager:6},
        {id:9, name:"Deena", designation:"Associate", team:"Technology", manager:8},
        {id:10, name:"Rachit", designation:"Associate", team:"Technology", manager:8},
        {id:11, name:"Darwin", designation:"Associate", team:"Technology", manager:8},
        {id:12, name:"Charles", designation:"Associate", team:"Management", manager:9},
        {id:13, name:"Delta", designation:"Associate", team:"Management", manager:12},
        {id:14, name:"Farrow", designation:"Associate", team:"Marketing", manager:5},
        {id:15, name:"Sarah", designation:"Associate", team:"Management", manager:5},
        {id:16, name:"Cynthia", designation:"Associate", team:"Management", manager:5},
        {id:17, name:"Ravi", designation:"Associate", team:"Management", manager:4},
        {id:18, name:"Viraj", designation:"Associate", team:"HR", manager:15},
        {id:19, name:"Harry", designation:"Associate", team:"Marketing", manager:14},
        {id:20, name:"Dame", designation:"Associate", team:"Marketing", manager:19},
        {id:21, name:"Arjun", designation:"Associate", team:"Marketing", manager:26},
];
    
    return users;
}
export default UserDB;