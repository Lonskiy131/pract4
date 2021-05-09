//class ->function
//ab class-> class -> object
let z = 'ZTFK';
let k = 'IV';
let g = 'P-43';
let f = 'Information';
let d = 'Richard';
let c = '12345678910';
let a = 'Vadim';
let b = 'Lonskiy';


const person = new User(d,c,a,b);
console.log(person);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.username);
console.log(person.validatePassworld());


let firstStudent  = new Student(z,f,g,k,d,c,'rich',a,b);
console.log(firstStudent);
console.log(firstStudent.getStudentCourses());
console.log(firstStudent.validatePassworld());

