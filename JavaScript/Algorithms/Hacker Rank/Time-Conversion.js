/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here

    // Check if 24H Time is PM or AM
    let isAM;
    ((s.slice(s.length - 2, s.length)) == 'AM') ? isAM = true : isAM = false;

    // Based on that change the hour
    let twelveHour = false; // Save if we are having twelveHour
    let initialHour = s.slice(0, 2); // Save initial hour

    // Check if we are having the 12 hour
    if (initialHour == '12') {
        twelveHour = true;
    }

    if (isAM) { // If the hour is AM we just need to verify 12
        if (twelveHour) {
            return createNewHour('00', s);
        }
    } else { // If the hour is PM we need to do the same and do the math
        if (!twelveHour) {
            return createNewHour(new String(12 + Number(initialHour)), s);
        }
    }
    return createNewHour(null, s);
}

function createNewHour(hourToSet, s) {
    if (hourToSet) {
        return hourToSet + (s.slice(2, s.length - 2));
    } else {
        return s.slice(0, s.length - 2);
    }
}



function main() {
    const s = '12:05:45AM';

    const result = timeConversion(s);

    console.log(result);
}

main();
