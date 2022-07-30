const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

const speak = document.querySelector('#speak');
const output = document.querySelector('#output');
const outputTwo = document.querySelector('#outputv2');
const info = document.querySelector('#info');

speak.addEventListener('click', () => {
    recognition.onstart = () => {
        info.innerHTML = `Listening Please Speak`;
    }


    recognition.onspeechend = () => {
        recognition.stop()
    }

    recognition.onresult = (e) => {
        const transcript = event.results[0][0].transcript;
        const confidence = event.results[0][0].confidence;
        info.innerHTML = ``
        output.innerHTML = `<b>Result</b> : ${transcript}`
        outputTwo.innerHTML =  `<b>Accuracy:</b> ${Math.round(confidence * 100)} %`
       
    }

    recognition.start()
})