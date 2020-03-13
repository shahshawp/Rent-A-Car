var x = 0;
function bgChange(){
    document.getElementById("datetime").innerHTML = Date();
    if(x == 0){
        
        document.getElementById("jumbotron").style.backgroundImage = "url('styles/images/cars.jpg')";
        x = x+1;
        
    }
    else if(x == 1){
        document.getElementById("jumbotron").style.backgroundImage = "url('styles/images/car5.jpeg')";
        x = 0;
        
    }
    
    
}
window.onload = new Function('setInterval("bgChange()",4000)');