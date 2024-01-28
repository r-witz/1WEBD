const descriptionElement = document.getElementById("description");
const afficherBtn = document.getElementById("afficherBtn");

afficherApercu();

function afficherApercu() {
    descriptionElement.style.maxHeight = "20px";
    afficherBtn.textContent = "Afficher plus";
};
  
function afficherDescription() {
  if (descriptionElement.style.maxHeight === "20px") {
    const heightAuto = descriptionElement.scrollHeight;
    descriptionElement.style.maxHeight = heightAuto + "px";
    afficherBtn.textContent = "Afficher moins";
  } else {
    descriptionElement.style.maxHeight = "20px";
    afficherBtn.textContent = "Afficher plus";
  };
};