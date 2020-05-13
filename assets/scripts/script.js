const buttons = document.querySelectorAll(".experience__timeline-btn");
const activeBtn = document.querySelector(".experience__timeline-btn.active");
const experienceDescriptions = document.querySelectorAll(".experience__desc");
const experiencePointer = document.getElementById("experiencePointer");

const resetStyles = () => {
  const activeBtn = document.querySelector(".experience__timeline-btn.active");
  const experienceDescription = document.querySelector(
    ".experience__desc.active"
  );
  activeBtn.classList.remove("active");
  experienceDescription.classList.remove("active");
};

const changeHighlightBtn = button => {
  const dataAttribute = button.getAttribute("data-controls");
  const expDesc = document.getElementById(dataAttribute);

  expDesc.classList.add("active");
  button.classList.add("active");

  changePointerPosition(button);
};

const changePointerPosition = button => {
  if (window.innerWidth > 768) {
    experiencePointer.style.top = "4rem";
    experiencePointer.style.left = button.offsetLeft + button.offsetWidth / 2;
  } else {
    experiencePointer.style.left = "50%";
    experiencePointer.style.top = button.offsetTop + button.offsetHeight;
  }
};

// Event listeners
buttons.forEach(button => {
  button.addEventListener("click", () => {
    resetStyles();
    changeHighlightBtn(button);
  });
});

window.onload = () => {
  changePointerPosition(activeBtn);
};
window.onresize = () => {
  const activeBtn = document.querySelector(".experience__timeline-btn.active");
  changePointerPosition(activeBtn);
};
