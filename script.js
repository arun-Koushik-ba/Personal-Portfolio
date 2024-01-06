/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  window.addEventListener(("scroll"),()=>{document.querySelector("#photo").style.marginTop=`${window.scrollY * 1.5}px`})
  window.addEventListener(("scroll"),()=>{document.querySelector("#train").style.paddingLeft=`${window.scrollY*5}px`})
 
  function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) ){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 ){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length >=140){
      text = "Please Enter Less Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    console.log(name);
    console.log(subject);
    console.log(phone);
    console.log(email);
    console.log(message);

    alert("Form Submitted Successfully!");
    return true;
  }
  function myfun(){
    alert("Thank you for hiring me");
  }
  


  