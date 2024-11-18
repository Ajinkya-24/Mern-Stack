function msg(fname, lname) {
    console.log(`Hello, ${fname} ${lname}`);
}

function delayedMsg(fname, lname, callback) {
    console.log("Wait for msg");
    setTimeout(() => {
        callback(fname, lname);
    }, 2000);
}

function say(fname, lname) {
    console.log(`Hello, ${fname} ${lname}`);
}

delayedMsg("Shyam", "Kumar", say);