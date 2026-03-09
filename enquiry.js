function submitForm(){

let name=document.getElementById("name").value;

if(name==""){
alert("Please enter your name");
return false;
}

alert("Thank you for your enquiry! Our tourism team will contact you.");

return true;
}
