let counterValue = 0;

document.querySelector('[data-action="decrement"]').addEventListener('click', () => { 
    counterValue -= 1;
    document.querySelector('#value').innerHTML = counterValue;
});

document.querySelector('[data-action="increment"]').addEventListener('click', () => { 
    counterValue += 1;
    document.querySelector('#value').innerHTML = counterValue;
});