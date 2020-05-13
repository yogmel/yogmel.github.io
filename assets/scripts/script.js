const buttons = document.querySelectorAll(".experience__timeline > button");
const activeBtn = document.querySelectorAll(".experience__timeline > button.active");
const experienceDescriptions = document.querySelectorAll('.experience__desc');
const experiencePointer = document.getElementById('experiencePointer');

buttons.forEach(button => {
  button.addEventListener("click", () => {
    resetStyles();
    changeHighlightBtn(button);
  })
})

const resetStyles = () => {
  experienceDescriptions.forEach(expDesc => { expDesc.classList.remove('active') });
  buttons.forEach(btn => { btn.classList.remove('active') });
}

const changeHighlightBtn = (button) => {
  const dataAttribute = button.getAttribute('data-controls');
  const expDesc = document.getElementById(dataAttribute);

  expDesc.classList.add('active');
  button.classList.add("active");

  changePointerPosition(button);
}

const changePointerPosition = elm => {
  if (window.innerWidth > 550) {
    experiencePointer.style.top = "4rem";
    experiencePointer.style.left =
      elm.offsetLeft +
      elm.offsetWidth / 2;
  } else {
    experiencePointer.style.left = "50%";
    experiencePointer.style.top =
      elm.offsetTop +
      elm.offsetHeight;
  }
}

(function() {
  changePointerPosition(activeBtn);
})()

window.onresize = function(){
  changePointerPosition(document.querySelector(".experience__timeline > button.active"))
};
