let user ="username";
let password ="password";
if(user && password){
    if(user=="username")
    {
        if(password=="password"){
            console.log("login Successfully");
        }
        else{
            console.log("vaild password enter");
        }
    }
    else{
        console.log("enter valid username");
    }
}
else{
    console.log("enter user and password required");
}