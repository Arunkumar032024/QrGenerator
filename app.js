const generateBtn = document.querySelector(".form button"),
qrCodeBox = document.querySelector(".qr-code"),
qrInput = document.querySelector(".form input"),
qrImg = document.querySelector(".qr-code img");
qrImgDownload = document.querySelector(".qr-code button");

generateBtn.addEventListener("click", ()=> {
    let qrValue = qrInput.value;
    if(!qrValue) return; // if the input is empty then return from here
    generateBtn.innerText = "Generating QR Code...";
    generateBtn.classList.add("generate");
    // getting a QR code of user entered value using the qrserver 
    // api and passing the api returned img src to quImg
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        qrCodeBox.classList.add("active");
        generateBtn.classList.remove("generate");
        generateBtn.innerText = "Generate QR Code";
        setTimeout(() => {
            qrCodeBox.classList.remove("active");
        }, 5000)
    });
    
});

qrImgDownload.addEventListener("click", () => {

});