

let speakBtn = document.getElementById("speakBtn");

speakBtn.addEventListener("click", () => {
    let text = document.getElementById("textInput").value;
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
});