function passwordCheck()
{
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
      if(password1.length<8)
    {
        alert("The first password's length is less than 8!");
    }
   else  if(password2.length<8)
    {
        alert("The second password's length is less than 8!");
    }
   else if(password1==password2)
    {
        alert("Password matches!");
    }
  
  else  if(password1!=password2)
    {
        alert("Passwords do not match!");
    }
}