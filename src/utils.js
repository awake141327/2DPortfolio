export function displayDialogue(text, onDisplayEnd) {
  // UI of Dialogue Box.
  const dialogueUI = document.getElementById("textbox-container");
  const dialogue = document.getElementById("dialogue");

  dialogueUI.style.display = "block";

  // Printing text in Typewriter effect.
  let index = 0;
  let currentText = "";
  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      dialogue.innerHTML = currentText;
      index++;
      return;
    }

    clearInterval(intervalRef);
  }, 5);

  // Close button of Dialogue Box
  const closeBtn = document.getElementById("close");

  closeBtn.addEventListener("click", onCloseBtnClick);

  function onCloseBtnClick() {
    onDisplayEnd();
    dialogueUI.style.display = "none";
    dialogue.innerHTML = "";
    clearInterval(intervalRef);
    closeBtn.removeEventListener("click", onCloseBtnClick);
  }
}

export function setCamScale(k) {
  const resizeFactor = k.width() / k.height();

  if (resizeFactor < 1) {
    k.camScale(k.vec2(0.8));
    return;
  }

  k.camScale(k.vec2(1.5));
}
