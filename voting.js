
    let loginButton = document.getElementById("loginB")
    loginButton.addEventListener('click', login)

    { 
        }
    {
        var empt = document.inputid["loginB"]["submit"].value;
        if (empt == "")
        {
        alert("Please input a Value");
        return false;
        }
        else 
        {
        alert('Code has accepted : you can try another');
        return true; 
        }
        }
    
    let cancel = document.getElementsByClassName("cancelbtn")[0]
        cancel.addEventListener('click', function(){
        console.log("cancelled");

    })

    function login(){
        console.log("looged in")   
        window.open("login.html", "_self")
    
    }
