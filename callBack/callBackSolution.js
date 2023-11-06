


function waitingForSomeServerToAct(myCallBack) {

    let dataNeeded;

    setTimeout(() => {
       console.log("backEnd info have just been received!"); 
       dataNeeded = "Kolbaskas"

       myCallBack(dataNeeded);

    }, 5000);
    return dataNeeded;

}

function fThanNeedBackendData(info) {
    console.log("I need to use backend data "+info)
}

waitingForSomeServerToAct(fThanNeedBackendData);


/**
 * the first solution js came up with was this callback 
 * 
 * after ES6 -> promises -> handles async nature of js
 * 
 * !!!!!!!2017-> async functions, >>>  await keyword -> used now!!!!
 */




