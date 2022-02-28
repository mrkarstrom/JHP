const topNav = document.getElementById("topNav");
const dropDown = document.getElementById("dropDown");

topNav.addEventListener("click", toggleFunction);

function toggleFunction() {
  if (topNav.style.display === "none") {
    topNav.style.display = "block";
    dropDown.style.display = "none";
  } else {
    topNav.style.display = "none";
    dropDown.style.display = "block";
  }
}
