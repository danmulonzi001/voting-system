
    let loginButton = document.getElementById("loginB")
    loginButton.addEventListener('click', login)

    
    let cancel = document.getElementsByClassName("cancelbtn")[0]
        cancel.addEventListener('click', function(){
        console.log("cancelled");

    })

    function login(){
        console.log("looged in")   
        window.open("login.html", "_self")

    
    }
    function submit(){
        console.log("do not login when password is not entered")
    }
