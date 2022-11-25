window.onload = function(){
    var first_name = localStorage.getItem('first_name');
    if (first_name !== null) $('#inputName').val(first_name);
    var last_name = localStorage.getItem('last_name');
    var address = localStorage.getItem('address');
}

window.onbeforeunload = function(){
    localStorage.setItem(first_name,$('#firstname').val());
    localStorage.setItem(last_name,$('#lastname').val());
    localStorage.setItem(address,$('#address').val());
}

function validateForm(){
    var fname=document.forms["contactform"]["firstname"].value;
    var lname=document.forms["contactform"]["lastname"].value;
    var address=document.forms["contactform"]["address"].value;
    var postcode=document.forms["contactform"]["postcode"].value;
    var state=document.forms["contactform"]["state"].value;
    var country=document.forms["contactform"]["country"].value;
    var phone=document.forms["contactform"]["phone"].value;
    var email=document.forms["contactform"]["email"].value;
    var contact_method=document.forms["contactform"]["contact_method"].value;
    var msg=document.forms["contactform"]["msg"].value;


    if(fname=="" || fname==null || lname=="" || lname==null || address==""||
        address==null || postcode=="" || postcode==null || state=="" || state==null ||
        country=="" || country==null || phone=="" || phone==null || email=="" || email==null ||
        contact_method==""|| contact_method==null || msg=="" || msg==null ||
        alert("Please make sure fill all the fields!") )
        return false;
}

function validateEmail(){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(contactform.email.value)){
        return(true)
    }
    alert("It is an invalid email address!")
    return(false)
}

document.getElementById("button").onclick = function () {
    alert("Thanks for submit a question.");
    return(false);
};
