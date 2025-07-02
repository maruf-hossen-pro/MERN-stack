class myClass{
    //properties
    subject="JavaScript";
    sir="Asif "
    student=["Ali", "Sara", "John", "Emma"];
    firstStudent=this.subject[0];
    
    //methods
    sum=(a,b) =>{
        if(isNaN(a) || isNaN(b)){
            return "Please Enter Valid Numbers";
        }
        return Number(a)+ Number(b);
    }

    // constructor:
    constructor(msg="Hello World"){
        console.log(msg);
    }

}
//inheritance :
class firstClass extends myClass{
    lastStudent =() =>{
        return this.student[3];
    }
}
const obj = new myClass("Programming Hero");
const obj2= new firstClass();
otherIns.Ali ="Ali is a student";
otherIns.Sara ="Sara is a student";
otherIns
console.log(obj.subject);
console.log(obj.sir);
console.log(obj.student[0]);
// console.log(obj.student[1]);
// console.log(obj.student[2]);
// console.log(obj.student[3]);
console.log(obj.sum(30, 10));
console.log(obj2.lastStudent());