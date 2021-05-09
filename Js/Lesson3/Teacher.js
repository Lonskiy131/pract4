class Teacher extends UserChe {
    constructor(zakl,posada,kafedra,username,passworld,nickname,firstnamee,lastnamee){
        super (username,passworld);
        this.zakl = zakl;
        this.posada = posada;
        this.kafedra = kafedra;
        this.nickname = nickname;
        this.firstnamee = firstnamee;
        this.lastnamee = lastnamee;
        
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
