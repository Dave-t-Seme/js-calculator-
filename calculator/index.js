const keys = document.querySelector('#keys');
const display = document.querySelector('#display');
const calculator = document.querySelector('#calculator');

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;

        const content = key.textContent;
        const displayNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if(!action){
            // console.log('number key')
            if(displayNum === "\n            0\n        " || previousKeyType === 'operator'){
                display.textContent = content;
            } else {
                display.textContent = displayNum + content; 
            }
        }

        if(action === 'add' ||
            action === 'subtract' ||
            action === 'divide' || 
            action === 'multiply'){
            console.log('operator key')
            calculator.dataset.previousKeyType = 'operator';

            calculator.dataset.firstValue = displayNum;
            calculator.dataset.operator = action;
        }
        
        if (action === 'decimal') {
            display.textContent = displayNum + '.';
        }

        if (action === 'clear') {
            display.textContent = '0';
        }

        if(action === 'back'){
            if(calculator.dataset.displayNum !== '0'){
                display.textContent = '0';
            }
        }

        if (action === 'equals') {
            const secondVal = displayNum;
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator

            display.textContent = calculate(firstValue, operator, secondVal);
        }

        if(action === 'sqrt'){
            display.textContent = Math.sqrt(displayNum)
        }

        if(action === 'reciprocal'){
            display.textContent = (1/displayNum);
        }
    };
});


const calculate = (x, operator, y) => {
    let answer = 0;
    switch(operator){
        case 'add':
            answer = parseFloat(x) + parseFloat(y);
            break;
        case 'subtract':
            answer = parseFloat(x)  - parseFloat(y);
            break;
        case 'multiply':
            answer = parseFloat(x) * parseFloat(y);
            break;
        case 'divide':
            answer = parseFloat(x) / parseFloat(y);
            break;
        default:
            break;
    }

    return answer;
}