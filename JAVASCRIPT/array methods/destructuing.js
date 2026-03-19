// let name=["tony","stark","steve","peter"];
// let [winner,runnerup,...other]=name;
// console.log(winner,runnerup,other);

//destructuring in object
const student={
    name:"devesh",
    roll:22216,
    username:"devesh@xyz",
    password:"devesh123",
    age:19,
    dob:"1/2/3",
    place:"mumbai",
};
let {username:user,password:pass,place="pune"}=student;
console.log(user);
console.log(pass);
console.log(place);
