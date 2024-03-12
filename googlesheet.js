const scriptURL = 'https://script.google.com/macros/s/AKfycbyxhFqK6KSqiy3R2zMSpdVUpPfOxcOntgTDHdbyuGgguYxdpzANK0gLV5k7HcT2zbI3/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank you contacting with us | We will react out to you shortly!";

        setTimeout(function(){
            msg.innerHTML = ""
        },3000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})