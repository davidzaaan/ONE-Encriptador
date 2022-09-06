console.log("Hello world");

// Form from we get the user text to encrypt
const form = document.getElementById("text_form");

// Text given by the user to encrypt
const textToEncript = document.getElementById("text_by_user");

// The box container of the text to encrypt
const textEncryptedbox = document.querySelector(".text_encrypted");

// Initial text no found container
const textNoFound = document.querySelector(".text_no_found");

// The final textbox after encryption or desencryption
const textResult = document.querySelector(".resulting_text");


if (form) {
    form.onsubmit = (event) => {
        return false; // This is to avoid page reloading after submitting
    }
}


function isEmpty(text) {
    return text.trim().length > 0;
}


function cipher(text) {
    const cipheredText = text
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');

    return cipheredText;
}


function decipher(text) {
    const decipheredText = text
        .replace(/enter/gi, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u');

    return decipheredText;
}


function copyToClipboard() {
    // Getting the text result from its box
    const textToCopy = textResult.innerHTML;

    navigator.clipboard.writeText(textToCopy).then(() => {
        // Getting copy button
        const copyButton = document.querySelector(".copy_to_clipboard");

        copyButton.innerText = "Copied!";

        setInterval(() => {
            copyButton.innerText = "Copy";
        }, 2300);

    }).catch((err) => {
        alert("Oops, something failed. Please try again");
    })

}


function desencriptar() {
    let textGivenByUser = textToEncript.value;

    // Checking that the text is not empty
    if (isEmpty(textGivenByUser)) {

        textNoFound.style.display = "none";
        textEncryptedbox.style.display = "flex";

        let cipheredText = decipher(textGivenByUser);

        document.querySelector(".resulting_text").innerText = cipheredText;
    } else {
        return;
    }
}


function encriptar() {
    let textGivenByUser = textToEncript.value;

    // Checking that the text is not empty
    if (isEmpty(textGivenByUser)) {
        textNoFound.style.display = "none";
        textEncryptedbox.style.display = "flex";

        let cipheredText = cipher(textGivenByUser);

        document.querySelector(".resulting_text").innerText = cipheredText;
    } else {
        return;
    }
}