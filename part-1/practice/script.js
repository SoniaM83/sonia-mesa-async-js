//LONG-RUNNING ASYNC TASK
function asyncTask(callback) {
    setTimeout(() => {
        //SET TO SIMULATE A TASK TAKING 4 SECONDS TO COMPLETE
        callback('Task Completed!');
    }, 4000); //4 SECOND DELAY
}
//START TASK ON CLICK
document.querySelector("#start").addEventListener("click", () => {
    document.querySelector("#status").textContent = "Task in progress... Please wait.";

//CALLS TASK
    asyncTask((message) => {
        document.querySelector("#status").textContent = message;
    });
});