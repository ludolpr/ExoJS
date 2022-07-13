const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = document.querySelector(".form button"),
qrImg = document.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", ()=> {
    let qrValue = qrInput.value.trim();
    if(!qrValue) return;
    generateBtn.innerText ="Génération."
    qrImg.src=` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=Example=${qrValue}`;
    qrImg.addEventListener("load", ()=> {
        wrapper.classList.add("active");
        generateBtn.innerText ="Génération d'un QR code ...";
    });
});

qrInput.addEventListener("keyup", ()=> {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});