const first = document.querySelector("#first");
const second = document.querySelector("#second");

const redbtn = document.querySelector("#red");
const yellowbtn = document.querySelector("#yellow");

function red() {
  first.style.backgroundColor = "red";
  second.style.backgroundColor = "red";
}
redbtn.addEventListener("click", red);
function yellow() {
  first.style.backgroundColor = "yellow";
  second.style.backgroundColor = "yellow";
}
yellowbtn.addEventListener("click", yellow);
