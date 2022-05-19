
     function get(){
    let user =  JSON.parse(localStorage.getItem("userInfo"));
    let username = user.username;
    let password = user.password;
    let str = "*";
    let rpass = str.repeat(password.length);
    
    if(username) {
        document.getElementById('usr').innerText = username;
    }
    if(password) {
        document.getElementById('pass').innerText = rpass;
    }
     }