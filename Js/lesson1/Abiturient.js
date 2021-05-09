class Abiturient extends UserAmb{
    constructor(KlBalZNO,KlBalOsvita,Zaklad,passworlds,usernames,firstname1,lastname1){
        super(passworlds,usernames);
        this.KlBalZNO = KlBalZNO;
        this.KlBalOsvita = KlBalOsvita;
        this.Zaklad = Zaklad;
        this.firstname1 = firstname1;
        this.lastname1 = lastname1;

    }
    getStudentCourses(){
        return[1,2];
    }
    validatePassworld(){
        //>6 !!!10
        super.validatePassworld();
        if(this.passworlds.lengths > 10){
            return true;
        }
        return false;
    }
}
