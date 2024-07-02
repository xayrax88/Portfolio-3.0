
const scriptURL = 'https://script.google.com/macros/s/AKfycbzvHWkjtJw2-BK16pK67j1avj5GOiDmUjC-LxgADWGMM370FvFNXALGlrn-Umx9RRD_4Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 10000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
