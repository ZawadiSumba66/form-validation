const form=document.querySelector('#my-form');
const msg=document.querySelector('.msg');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const numberInput=document.querySelector('#number');
const submit=document.querySelector('.enter');
const messageInput=document.querySelector("#text")
submit.addEventListener('click',submitForm);

function submitForm(e){
    e.preventDefault();
    if(nameInput.value.length>20 || nameInput.value.length===0){
        msg.style.padding="10px";
        msg.innerHTML="Invalid name input";
        setTimeout(()=>msg.remove(),3000);
        return false;
    }
    if( emailInput.value.indexOf("@")==-1|| emailInput.value.length<20){
        msg.style.padding="10px";
        msg.innerHTML="Invalid email";
        setTimeout(()=>msg.remove(),3000);
        return false;
    }
    if(isNaN(numberInput.value) || numberInput.value.length<10){
        msg.style.padding="10px";
        msg.innerHTML="Invalid Number entry";
        setTimeout(()=>msg.remove(),3000);
        return false;
      
    }
    if(numberInput.value==="" || nameInput.value==="" || emailInput.value===""){
        msg.style.padding="10px";
        msg.innerHTML="Input required in the field below";
        setTimeout(()=>msg.remove(),3000);
        return false;
    }
    if(messageInput.value.length>8){
        msg.style.padding="10px";
        msg.innerHTML="8 characters only required in the message box";
        setTimeout(()=>msg.remove(),3000);
        return false;
    }
    if(numberInput.value==="" || nameInput.value==="" || emailInput.value==="" || messageInput.value===""){
        msg.style.padding="10px";
        msg.innerHTML="Input required in the field below";
        setTimeout(()=>msg.remove(),3000);
        return false;
    }
   
    nameInput.value="";
    emailInput.value="";
    numberInput.value="";
    messageInput.value="";
    return true;
};

 