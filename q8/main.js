function student(name, gender){

this.name = name;
this.gender = gender;

}

let studObj1 = new student("mona", "yaghoubi");
student.prototype.age = "20";

console.log(student);

let studObj2 = new studObj1("mina", "mahdavi");
console.log(studObj2);
