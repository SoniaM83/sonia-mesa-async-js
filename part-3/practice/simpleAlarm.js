const output = document.querySelector("#output");

// PROMISE BASED ALARM FUNCTION
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject("Alarm delay must not be negative");
    } else {
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    }
  });
}

// USING ALARM FUNCTION WITH ASYNC/AWAIT
async function setAlarm() {
  try {
    const message = await alarm("Sonia", 2000); // NAME: SONIA, DELAY 2 SECONDS
    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
}

setAlarm();