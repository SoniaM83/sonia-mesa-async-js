//INITIALIZES NEW WEB WORKER
const worker = new Worker('./worker.js');

//START CALCULATION WHEN "START CALCULATION" BUTTON CLICKED
document.getElementById('start').addEventListener("click", () => {
    const number = parseInt(document.getElementById('number').value, 10);
//VALIDATE THAT THE INPUT IS A POSITIVE INTEGER
    if (isNaN(number) || number <= 0) {
        document.getElementById('output').textContent = 'Please enter a valid positive number.';
        return;
    }
//SEND VALID NUMBER TO WORKER FOR PROCESSING
    worker.postMessage(number);
    document.getElementById('output').textContent = 'Calculating...';
});
//DISPLAY THE SUM RECEIVED FROM WORKER IN OUTPUT FIELD
worker.addEventListener('message', (event) => {
    //LOG MESSAGE RECEIVED FROM WORKER FOR DEBUGGING
    console.log(`Message received from worker: ${event.data}`);

    document.getElementById('output').textContent = `The sum is ${event.data}`;
});

document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('output').textContent = 'Result will show here...';
    document.getElementById('number').value = '';
});