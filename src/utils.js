export function displayDialogue (text, onDisplayEnd) {
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");

    dologueUI.style.display = "block";

    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(() => {
        if (index < text.length) {
            currentText += text[index];
            dialogue.innerHTML = currentTextl
            index++;
            return;
        }
        clearInterval(intervalRef);
    }, 5);
    function onCloseBtnClick() {
        onDisplayEnd();
        dialogueUI.style.display = "none";
        dialogue.innerHTML = "";
        clearInterval(intervalRef);
        onCloseBtn.removeEventListener("click", onCloseBtnClick);
    }
    onCloseBtnClick.addEventListener("click", onCloseBtnClick);
}