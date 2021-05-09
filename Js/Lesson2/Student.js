class Student extends User {
    constructor(zaklad,fackultet,grupa,kyrs,username,passworld,nickname,firstname,lastname){
        super (username,passworld);
        this.zaklad = zaklad;
        this.fackultet = fackultet;
        this.grupa = grupa;
        this.kyrs = kyrs;
        this.nickname = nickname;
        this.firstname = firstname;
        this.lastname = lastname;
        
    }
    getStudentCourses(){
        return[1,2];
    }
    validatePassworld(){
        //>6 !!!10
        super.validatePassworld();
        if(this.passworld.length > 10){
            return true;
        }
        return false;
    }
}
