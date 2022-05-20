function student(name, gender){

this.name = name;
this.gender = gender;

}

let studObj1 = new student("mona", "yaghoubi");
student.prototype.age = "10";

console.log(studObj1);

let studObj2 = studObj1;
student.prototype = { age : 20 };
console.log(studObj2.age);
