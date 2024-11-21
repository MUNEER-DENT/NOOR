function translateText() {
    const inputText = document.getElementById("inputText").value;
    const outputText = document.getElementById("outputText");

    // محاكاة تعريب النص (يمكن لاحقًا استخدام API للترجمة)
    outputText.value = inputText.split("").reverse().join("");
}
