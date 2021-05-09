
user.passworld = 'hello123';
console.log(user.vallidatepassworld());
user_profile.age = 18;
user_profile.username ='Richard';
console.log(user_profile);

let a = {
    "text": 'Hello',
    "color": 'red',
    "bold" : true,
    "show" : function(){
        console.log(this.color);
    },
    
};
let b = {
    "fontSize": '24px',
    __proto__ : a

}

let c = {
    "fontFamily": 'Verdana',
    __proto__ : b
}
console.log(c);
console.log(c.bold);
console.log(c.hasOwnProperty("bold"));


//a -> b -> c// наследование //

b.color = 'green';
b.show();
a.show();
console.log(a);
console.log(b);
b.text = 'one'; 
console.log(b.text);
console.log(a.text);