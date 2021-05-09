//class ->function
//ab class-> class -> object
let zak = 'ZTFK';
let pas = '125684';
let nick = 'Abiturient';
let kolBalZno = '156';
let KlBalOsvit = '123';
let fir = 'Evgeniy';
let las = 'Andrishka';


const person1 = new UserAmb(nick,pas,fir,las);
console.log(person1);
console.log(person1.firstname1);
console.log(person1.lastname1);
console.log(person1.username1);
console.log(person1.validatePassworld());


let firstAbiturient  = new Abiturient(KlBalOsvit,kolBalZno,zak,nick,pas,fir,las);
console.log(firstAbiturient);
console.log(firstAbiturient.getStudentCourses());
console.log(firstAbiturient.validatePassworld());



