/***
 * in java make database connection and get some data -> you use data in code 
 * --- connects to database 
 * --- gets data 
 * --- rest of code is waiting until data is received 
 * then executes rest of code - > called sync action
 * 
 * in JS -> while trying to connect to db -> rest of code does not wait.
 * -> assync code 
 */


function waitingForSomeServerToAct() {
    let dataNeeded;
    setTimeout(() => {
       console.log("backEnd info have just been received!"); 
       dataNeeded = "Kolbaskas"
       console.log(dataNeeded);
    }, 5000);
    return dataNeeded;
}

function fThanNeedBackendData(info) {
    console.log("I need to use backend data "+info)
}
let data = waitingForSomeServerToAct(); //calling server connection getting data and storing it to a variable

fThanNeedBackendData(data);

