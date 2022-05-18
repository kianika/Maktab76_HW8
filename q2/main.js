function Submit(){

    var username =  document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    const user = {
        username: username,
        password: password,
    }

localStorage.setItem("userInfo",JSON.stringify(user));

}