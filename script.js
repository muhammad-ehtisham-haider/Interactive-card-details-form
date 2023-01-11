function formValidation(){
    var nam = document.details.name;
    var cdno = document.details.cardno;
    var month = document.details.month ;
    var year = document.details.year;
    var cv = document.details.cvc;

    if(namevalidation(nam)){
        if(numbervalidation(cdno)){
            if(monthvalidation(month)){
                if(yearvalidation(year)){
                    if( cvvalidation(cv)){
                      
                    }
                }
            }
        }
    }
    return false;
}


function namevalidation(nam){
    var letters =/^[a-z][a-z\s]*$/ ;
                  
    if(nam.value.match(letters)){
        return true;
    }else{
        document.getElementById("nameerror").innerHTML = "wrong format. alphabets only";
        nam.focus();
        return false;
    }
}
function numbervalidation(cdno){
    var numbers = /^[0-9\s]+$/;
    if(cdno.value.match(numbers)){
       return true
    }else{
        document.getElementById("noerror").innerHTML = "wrong format, numbers only"
        cdno.focus();
        return false;
    }
}

function monthvalidation(month){
    if(month.value == ""){
        document.getElementById("montherror").innerHTML = " Can't be blank";
        month.focus();
        return false;
    }else{
        return true;
    }
}

function yearvalidation (year){
    if(year.value == ""){
        document.getElementById("yearerror").innerHTML = " Can't be blank";
        year.focus();
        return false;
    }else{
        return true;
    }
}

function cvvalidation (cv){
    if(cv.value == ""){
        document.getElementById("cvcerror").innerHTML = " Can't be blank";
        cv.focus();
        return false;
    }else{
        // window.location.replace("new.html")
        document.getElementById("show").style.display= ("none")
        document.getElementById("conti").style.display= ("block")
        return true;
    }
}



function copy(){
    var inter = document.getElementById("nameout").value;
    var out = document.getElementById("paste");
    document.getElementById("nam").style.display= ("none")
    out.style.display=("block")
    out.innerHTML = inter;
}

function copyone(){
    var interone = document.getElementById("cardout").value;
    var outone = document.getElementById("pasteone");
    document.getElementById("para").style.display= ("none")
    outone.style.display=("block")
    outone.innerHTML = interone;
}

function copytwo(){
    var intertwo = document.getElementById("monthout").value;
    var outtwo = document.getElementById("m");

    outtwo.innerHTML = intertwo;
}

function copythree(){
    var interthree = document.getElementById("yearout").value;
    var outthree = document.getElementById("y");

    outthree.innerHTML = interthree;
}

function copyfour(){
    var interfour = document.getElementById("cvout").value;
    var outfour = document.getElementById("back");

    outfour.innerHTML = interfour;
}

