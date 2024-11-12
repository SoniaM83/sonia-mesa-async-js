/*SYNCHRONOUS PROGRAMMING
function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
}

const name = "Sonia";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Sonia!"   

function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
}

const name = "Sonia";
const greeting = makeGreeting(name);
console.log(greeting);
//"Hello, my name is Sonia!" */

/*A LONG-RUNNING SYNCHRONOUS FUNCTION
const MAX_PRIME = 1000000;

function isPrime(n) {
    for (let i = 2; i<=Math.sqrt(n); i++){
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
    const primes= [];
    while (primes.length < quota) {
        const candidate = random(MAX_PRIME);
        if (isPrime(candidate)){
            primes.push(candidate);
        }
    }
    return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
    const primes = generatePrimes(quota.value);
    output.textContent = `Finished generating ${quota.value} primes!`;
});

document.querySelector("#reload").addEventListener("click", ()=> {
    document.location.reload();
});  */

//EVENT HANDLERS
/*const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
    log.textContent = "";

const xhr = new XMLHttpRequest();

xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
});

xhr.open(
   "GET", 
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
    );
    xhr.send();
    log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
    log.textContent = "";
    document.location.reload();
});
*/

//CALLBACKS
/*function doStep1(init) {
    return init + 1;
}

function doStep2 (init) {
    return init +2;
}

function doStep3 (init) {
    return init + 3;
}

function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
}

doOperation();
*/

function doStep1(init, callback) {
    return init + 1;
    callback(result)
}

function doStep2 (init, callback) {
    return init +2;
    callback(result);
}

function doStep3 (init, callback) {
    return init + 3;
    callback(result);
}

function doOperation() {
    doStep1(0, (result1) => {
        doStep2(result1, (result2) => {
            doStep3(result2, (result3))
                console.log(`result: ${result3}`);
        });
    });
};

doOperation();