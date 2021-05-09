//class ->function
//ab class-> class -> object
let zackl = 'ZTFK';
let usernam = 'Roman';
let FirNam = 'Romanovich';
let passs = '1236549205';
let nickd = 'Romako';
let posadaa = 'Infomation academic';
let kafed = 'Infomation technological';


const person2 = new UserChe(nickd,usernam,FirNam,passs);
console.log(person2);
console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.username);
console.log(person2.validatePassworld());


let firstCeacher  = new Teacher(nickd,usernam,passs,FirNam,kafed,zackl,posadaa);
console.log(firstCeacher);
console.log(firstCeacher.getStudentCourses());
console.log(firstCeacher.validatePassworld());

