let val1 = 0;
let val2 = 0;
let val3 = 0;

function btn1() {
    val1++;
    document.getElementById("res1").innerHTML = val1;
}

function btn2() {
    val2++;
    document.getElementById("res2").innerHTML = val2;
}

function btn3() {
    val3++;
    document.getElementById("res3").innerHTML = val3;
}

function sync() {
    document.getElementById("res1").innerHTML = val1;
    document.getElementById("res2").innerHTML = val2;
    document.getElementById("res3").innerHTML = val3;  
   if (document.getElementById("btnA").click && document.getElementById("btnB").click &&
     document.getElementById("btnC").click && document.getElementById("btnD").click){
        val1++; 
    } 
    if (document.getElementById("btnA").click && document.getElementById("btnD").click){
        val2++;
        val3++;
    }       
}
    
function refresh() {
val1=0;
val2=0;
val3=0;
document.getElementById("res1").innerHTML = val1;
document.getElementById("res2").innerHTML = val2;
document.getElementById("res3").innerHTML = val3;
}
   
       