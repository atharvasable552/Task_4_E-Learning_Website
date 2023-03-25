function auth()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email=="atharva05@gmail.com"&&password=="athar05"){
        window.location.assign("video.html");
        alert("Login Successful");
    }
    else{
        alert("Invalid Authentication");
    return;    
    }
}