// prompt the user to enter the speed
const speedLimit = 70;
const speed = parseInt(prompt("Enter a speed:")); // parse input to integer
let points;

// first if to test if the speed was within the limits
if (speed > speedLimit) {
    // calculates the points penalty if the speed is above the speed limit
    points = Math.floor((speed - speedLimit) / 5); // round down to get integer points

    // second if test whether the points have reached license suspension point
    if (points < 12) {
        console.log(points);
    } else {
        console.log("License suspended");
    }
} else {
    console.log("OK");
}
