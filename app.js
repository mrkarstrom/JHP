/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  const x = document.getElementById("myTopnav");
  
  x.forEach(link in links){
    
    link.classList.toggle("active");
  } 
    
}
