// Waiting untill all elements on page loaded
document.addEventListener('DOMContentLoaded', ()=>{
    // Searching for our quantity element
    let quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(quantityInput => {
        // For each quantity item let's add functionality
        let plusBtn = quantityInput.querySelector('.btn[data-effect="+"]');
        let minusBtn = quantityInput.querySelector('.btn[data-effect="-"]');
        let input = quantityInput.querySelector('input[type="number"]');
        // Adding functions for changing quantity based on input params such as Step and Min Max.
        plusBtn.addEventListener('click', ()=>{
            // Parsed to int so JS do not see our variables as string.
            input.value = (parseInt(input.value)+parseInt(input.step)<=parseInt(input.max))?parseInt(input.value)+parseInt(input.step):input.value;
        });
        minusBtn.addEventListener('click', ()=>{
            input.value = (input.value-input.step>=input.min)?input.value-input.step:input.value;
        });
    });

    // Добавляем прокрутку карусельки по нажатию на кнопку
    let carousels = document.querySelectorAll('.product-cards__list');
    carousels.forEach(carousel => {
        
        let moveBtn = document.createElement('div');
        moveBtn.classList.add("moveBtn");
        moveBtn.innerText = "->";
        moveBtn.addEventListener('click', ()=>{
            carousel.scrollLeft += carousel.clientWidth*0.75;
        });
        carousel.append(moveBtn);
    });
});