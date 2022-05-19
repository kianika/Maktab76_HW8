
     function get(){
    let user =  JSON.parse(localStorage.getItem("userInfo"));
    let username = user.username;
    let password = user.password;
    let str = "*";
    let rpass = str.repeat(password.length);
    let uname = username.split("_")[0];
    
    if(username) {
        document.getElementById('un').innerText = uname;
    }
    if(password) {
        document.getElementById('pass').innerText = rpass;
    }
    const tg = document.getElementById('container');

setTimeout(() => {
  tg.style.visibility = 'visible';
}, 5000);
     }