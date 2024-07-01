const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function speedDetector() {
    rl.question('Enter speed of Car: ', (input) => {
        let speed = parseInt(input, 10);
        const speedLimit = 70;

        if (isNaN(speed) || speed < 0) {
            console.log("Please enter a valid speed.");
            rl.close();
            return;
        } 

        if (speed <= speedLimit) {
            console.log("Ok");
        } else {
            let overSpeed = speed - speedLimit;
            let demeritPoints = 0;
        
            //while loop is used to increment the point with the 5kph increase
            while (overSpeed > 0) {
                overSpeed -= 5;
                demeritPoints++;
            }
            //
            console.log(`Points: ${demeritPoints}`);
            //while loop stops here and a string is returned saying license suspended
            if (demeritPoints > 12) {
                console.log("License suspended");
            }
        }
        // node readline ends the function
        rl.close();
    });
}

speedDetector();
