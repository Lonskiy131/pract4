class User {
    //username
    //passworld
    constructor (username,passworld,firstname,lastname){
        this.username = username;
        this.passworld = passworld;
        this.firstname = firstname;
        this.lastname = lastname;
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
