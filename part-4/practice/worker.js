//LISTENS FOR MESSAGES FORM MAIN THREAD
self.addEventListener('message', (event) => {
    const number = event.data;
    let sum = 0;
//CALCULATE THE SUM UP TO THE GIVEN NUMBER
    for (let i = 1; i <= number; i++) {
        sum += i; //ADDS EACH NUMBER FROM 1 TO THE SPECIFIED NUMBER
    }

    self.postMessage(sum);
});