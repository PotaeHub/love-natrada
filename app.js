const btnNo = document.getElementById("runBtn")
const yesBtn = document.getElementById("yesBtn")
const title = document.getElementById("title");
const card = document.querySelector(".card");
let step = 0;
yesBtn.addEventListener("click", () => {
    if (step === 0) {
        title.textContent = "รักเค้ามั้ยบี๋ๆ ❤️";
        btnNo.style.display = "none";
        yesBtn.value = "รักกกก ❤️";
        step++;
    }

    else if (step === 1) {
        title.textContent = "ดีใจเย้ๆ 🥳💕";
        yesBtn.value = "กอดหน่อย 🤗";
        step++;
    }
    else if (step === 2) {
        card.innerHTML = `
            <h1>💖 จบแล้วววว 💖</h1>
            <p>ขอบคุณที่ดีกับเค้านะบี๋ 🥺💕</p>
            <h2>รักบี๋ที่สุดเลย ❤️</h2>
        `;
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