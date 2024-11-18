let n;

for(n=1;n<=10;n++){
    console.log(n,"First Line of the Loop")

    if(n==6){
        //console.log("Terminate the loop",n)
        //break;
        console.log("Stop the Current itteration")
        continue;
    }
    console.log("last line of loop ",n)
}

console.log("Out of loop",n)