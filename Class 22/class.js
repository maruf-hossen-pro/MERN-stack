class myClass {
    //Properties
    className = 'Mern Batch 2';
    students = ["Alexa","Hero Alom","Hitlar","Nobel","Jemes","Chisti"];
    Nobel;
    //Methods
    organizarion = () => {
        return "DIPTi"
    }

    //Methods with parameters
    bestStudent = (std ='John Doe') =>{
        return std + ","+this.students[2] + "and" +this.students[3] + "are best friends"
    }
    //Construct
    constructor(){
        console.log("Class Created Successfully")
    }

}

const obj = new myClass();
console.log(obj.className);
console.log(obj.organizarion());
console.log(obj.bestStudent("Abul Sagol"));

const obj2 = new myClass();
obj2.Nobel = "Nobel Is a F**king G*y";
console.log(obj2.Nobel);
console.log(obj.Nobel);
obj2.nisha = "Nisha is nobels GF";
console.log(obj2.nisha);

class myChild extends myClass{
    topStudent = () => {
        return this.students[2] + "is the top student of the class";
    }
}

const childObj = new myChild();
console.log(childObj.topStudent());