const ValidEmailMessage = document.querySelector('.valid-email-span')
const EmailInput = document.querySelector('input')
const FormButton = document.querySelector('button[type="submit"]')
const CardImg = document.querySelector('.card-img')
const Newsletter = document.querySelector('.newsletter')
const SuccessCard = document.querySelector('.success-card')
const CorrectEmail = document.querySelector('.correct-email')
let isEmailValid

EmailInput.addEventListener('input', (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const email = event.target.value
    if (!emailRegex.test(email)) {
        EmailInput.dataset.error = "true"
        ValidEmailMessage.style.opacity = 1
        isEmailValid = false
    } else {
        EmailInput.dataset.error = "false"
        ValidEmailMessage.style.opacity = 0
        isEmailValid = true
    }
})

FormButton.addEventListener('click', (e) => {
    console.log(isEmailValid)
    e.preventDefault()
    if(isEmailValid)
    {
        CardImg.style.display = "none"
        Newsletter.style.display = "none"
        CorrectEmail.textContent = EmailInput.value
        SuccessCard.style.display = "flex"
    }
})