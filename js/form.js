
function manipularInputFocus(element) {
  let inputLabel = document.getElementById(`${element.id}Label`);
  inputLabel.classList.add("input-active")

}


function manipularInputBlur(element) {
  let inputLabel = document.getElementById(`${element.id}Label`);

  if(element.value.length == 0){
    inputLabel.classList.remove("input-active")
  }
  console.log(element.value.length);
  

}