//WRAPPING setTimeout()
/*const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

function setAlarm() {
    setTimeout(() => {
        output.textContent = "Wake up!";
    }, 1000);
}

button.addEventListener("click", setAlarm);
//SET ALARM BUTTON
*/
/*
//THE Promise() CONSTRUCTOR
function alarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error("Alarm delay must not be negative");
      }
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    });
  }
  */
/*
//USING THE alarm() API
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Alarm delay must not be negative");
      }
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    });
}

button.addEventListener("click", () => {
    alarm(name.value, delay.value)
        .then((message) => (output.textContent = message))
        .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});
*/

//USING ASYNC AND AWAIT WITH THE alarm() API
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}

button.addEventListener("click", async() => {
    try {
        const message = await alarm(name.value, delay.value);
        output.textContent = message;
    } catch (error) {
        output.textContent = `Couldn't set alarm: ${error}`;
    }
});
// "Wake up, Sonia!""