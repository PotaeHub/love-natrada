const btnNo = document.getElementById("runBtn")
const yesBtn = document.getElementById("yesBtn")
const title = document.getElementById("title");
yesBtn.addEventListener("click", () => {
    if (yesBtn.value === "ดีกัน") {
        title.textContent = "รักเค้ามั้ยบี๋ๆ ❤️";
        btnNo.style.display = "none";
        yesBtn.value = "รักกกก ❤️";
    } else if (yesBtn.value === "รักกกก ❤️") {
        title.textContent = "ดีใจเย้ๆ 🥳💕";
        yesBtn.value = "จุ๊บๆ 😘";
    }
});
btnNo.addEventListener("click", () => {
    const maxX = window.innerWidth - btnNo.offsetWidth;
    const maxY = window.innerHeight - btnNo.offsetHeight;
    btnNo.style.position = "absolute";

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btnNo.style.position = "fixed";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
})