let firstname=document.getElementById('fname');
let lastname=document.getElementById('lname');
let email=document.getElementById('Email');
let txtarea=document.getElementById('msg');
let submitBtn=document.getElementById('submitBtn');

submitBtn.addEventListener('click',function(event){
    event.preventDefault();
   
    if(firstname.value=="" || lastname.value=="" || email.value=="" || txtarea==""){
          alert('Please Fill in all the fields!');
          return ;
    }

 let querytype=document.querySelector('input[name="type"]:checked');
 if (!querytype){
    alert("Please select a query type.")
    return;
 }

 let consent =document.getElementById('consent');
 if (!consent.checked){
    alert("You must give consent to continue.");
    return;
 }

alert("From submitted"+ firstname.value);

document.querySelector("form").reset();

});