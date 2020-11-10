interface Printable{
  objName:string;
  fname?:string;
  lname?:string;
  age?:number;

  radius?:number;
}

const pi = 3.14;

const employee:Printable = {
  objName: "employee",
  fname : "Max",
  lname : "Tyson",
  age : 25
}

const circle:Printable = {
  objName: "circle",
  radius : 5
}

let prints = (obj:object)=>{
  for(let [k,v] of Object.entries(obj)){
    console.log(`${k}:${v}`);
  }
}

let printAll = (...objs)=>{
  for(let i of objs){
    prints(i);
  }
}
printAll(employee,circle);