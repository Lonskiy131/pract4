class UserAmb {
    //username
    //passworld
    constructor (username1,passworlds,firstname1,lastname1){
        this.username1 = username1;
        this.passworlds = passworlds;
        this.firstname1 = firstname1;
        this.lastname1 = lastname1;
    }
    validatePassworld(){
        //>6
        console.log('work paren pass')
        if(this.passworlds.lengths > 6){
            return true;
        }
        return false;
    }
}
