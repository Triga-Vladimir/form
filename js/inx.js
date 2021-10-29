var input = document.querySelectorAll('.form-fieldset > input');

input.forEach(item => item.addEventListener('blur', () => {
    input.forEach((inputItem) => {
        if (inputItem === item) {
            setTimeout(() => {
               inputItem.classList.toggle('filled'); 
            }, 700) 
        }
    })
})) 

