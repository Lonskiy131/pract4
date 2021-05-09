class UserChe {
    //username
    //passworld
    constructor (username,passworld,firstnamee,lastnamee){
        this.username = username;
        this.passworld = passworld;
        this.firstnamee = firstnamee;
        this.lastnamee = lastnamee;
    }
    validatePassworld(){
        //>6
        console.log('work paren pass')
        if(this.passworld.length > 6){
            return true;
        }
        return false;
    }
}
