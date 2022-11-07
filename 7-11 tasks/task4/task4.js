 let obj ={
    firstName : "Yazeed",

    salary : 700,
    age : 33,
};

function employeesInfo(x){
    let info = `The first name is: ${x.firstName}<br/>The age is: ${x.age}<br/>The salary is: ${x.salary}`;
    document.write(info);

}

employeesInfo(obj);