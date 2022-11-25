 window.alert(5+6);
 document.write(5+6);

 function prayut(){
     document.write(10+10);
 }

 function myid(){
    window.alert(10+7);
}

function syntx(){
    var x = 10;
    var y = 7;
    var z = x+y;
    document.getElementById("txt2").innerHTML = z;
}

function OC(){
    document.getElementById("txt3").innerHTML = "IT5101";
    var x = document.getElementById("txt3");
    if(x.style.display === "none"){
        x.style.display = "block"
    }else{
        x.style.display = "none";
    }
}

function select(){
    var x = document.getElementById("txt4").value;
    document.getElementById("txt5").innerHTML = "YOUT SELECT " + x;
}

function fincalert(){
    window.alert('informationtechnology');
}

function fconfirm(){
    if(confirm('DO YOU WANT YO VISTI : https:www.google.com')){
            alert("Going to https://www.google.com")
            window.location = 'https://www.google.com';
    }else{
        alert('YOU SELECT to cancel');
    }
}

function fsubmit(){
    if(confirm('Confirm to submit')==true){
        return true;
    }else{
        
        return false;
    
    }

}
