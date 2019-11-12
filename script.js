//generate random password
function generate(){

    
    let complexity = document.getElementById("slider").value;
    
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    document.getElementById("display").value = password;
    document.getElementById("lastNums").innerHTML += password + "<br />";

}



//set default length display of 25
document.getElementById("length").innerHTML = "Length: 25";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

//function to copy password to clipboard
function copyPassword(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");

}
