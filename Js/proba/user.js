
let user = {
    "login" : '',
    "passworld" : '',
    "vallidatepassworld" : function(){
        if(this.passworld.length>6){
            return true;
        }else{
            return false;
        }
    }
}
