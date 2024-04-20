const menuBtn = document.querySelector(".hamburger")
const tabItems = document.querySelectorAll(".tab-item")
const questions = document.querySelectorAll(".question")
const form = document.getElementById("form")
const emailInput = document.getElementById("email-input")
const errorValue = document.getElementById("error-value")

menuBtn.addEventListener("click", function () {
    document.querySelector(".navbar").classList.add("active")
    document.querySelector(".mobile-nav").classList.add("active")
    document.body.style.overflow = "hidden"
})

document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".navbar").classList.remove("active")
    document.querySelector(".mobile-nav").classList.remove("active")
    document.body.style.overflow = "auto"
})

tabItems.forEach(function (button, index) {
    button.addEventListener("click", function () {
        const tabContents = document.querySelectorAll(".tab-content")
        tabContents.forEach(function (content) {
            content.classList.remove("active")
        })
        tabContents[index].classList.add("active")

        tabItems.forEach(function (btn) {
            btn.classList.remove("active")
        })
        button.classList.add("active")
    })
})

questions.forEach(function (question) {
    question.addEventListener("click", function () {
        const arrowIcon = this.querySelector(".arrow-icon")
        const answer = this.nextElementSibling;
        const allAnswers = document.querySelectorAll(".answer");

        allAnswers.forEach(function (ans) {
            if (ans !== answer) {
                ans.style.maxHeight = null;
            }
        });

        if (arrowIcon.classList.contains("active")) {
            arrowIcon.classList.remove("active")
        } else {
            const allArrowIcons = document.querySelectorAll(".arrow-icon")
            allArrowIcons.forEach(function (icon) {
                icon.classList.remove("active")
            })
            arrowIcon.classList.add("active")
        }

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

form.addEventListener("submit", function (event) {
    event.preventDefault()

    if (emailInput.value.length < 1) {
        document.querySelector(".error-background").classList.add("active")
        errorValue.textContent = "Please insert your email"
        document.querySelector(".error-icon").classList.add("active")
    } else {

        if (validateEmail(emailInput.value)) {
            document.querySelector(".error-background").classList.remove("active")
            document.querySelector(".error-icon").classList.remove("active")
            alert(`email has been sent to ${emailInput.value}`)
        } else {
            document.querySelector(".error-background").classList.add("active")
            errorValue.textContent = "Please insert valid email format"
            document.querySelector(".error-icon").classList.add("active")

        }
    }
})
const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email)
}