

const passwordHolder = document.getElementById("passwordHolder");
const icon = document.getElementById("icon");
const generateButton = document.getElementById("generateButton");

function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
    const length = 8;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * characters.length);
        password += characters[randomNum];
    }

    passwordHolder.textContent = password;
}

function copyPassword() {
    const password = passwordHolder.textContent;
    navigator.clipboard.writeText(password)
        .then(() => {
            alert("Password copied to clipboard!");
        })

}

generateButton.addEventListener("click", generatePassword);
icon.addEventListener("click", copyPassword);
