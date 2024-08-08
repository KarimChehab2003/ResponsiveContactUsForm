// Example starter JavaScript for disabling form submissions if there are invalid fields
const checkmark = document.getElementById('consentCheck');
const radioCheck = document.querySelectorAll('.radioCheck');
const form = document.querySelector('.needs-validation');

form.addEventListener('submit', event => {
    event.preventDefault()

    if (!form.checkValidity()) {
        event.stopPropagation()
        form.classList.add('was-validated')
    } else {
        const toastLiveExample = document.getElementById('liveToast')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
        setTimeout(() => {
            location.reload()
        }, 3000)

    }

}, false)
// Loop over them and prevent submission


// Changes checkbox to green when checked
checkmark.addEventListener('change', () => {
    if (checkmark.checked)
        checkmark.style.backgroundColor = '#198754'
    else
        checkmark.style.backgroundColor = '#FFFFFF'
})

// Changes background color based on which radio is checked
Array.from(radioCheck).forEach(radio => {
    radio.addEventListener('change', () => {
        radioCheck.forEach(r => {
            const parentElement = r.parentElement;
            parentElement.classList.add('bg-transparent');
            parentElement.classList.remove('bg-success-subtle')
        })

        if (radio.checked) {
            const parentElement = radio.parentElement;
            parentElement.classList.remove('bg-transparent');
            parentElement.classList.add('bg-success-subtle')
        }

        // console.log(parentElement)
    })
})

// Trigger live toast
// const toastTrigger = document.getElementById('liveToastBtn')
// const toastLiveExample = document.getElementById('liveToast')

// if (toastTrigger) {
//     const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
//     toastTrigger.addEventListener('click', () => {
//         toastBootstrap.show()
//     })
// }


