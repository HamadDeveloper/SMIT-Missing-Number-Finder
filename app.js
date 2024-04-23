document.getElementById("findMissingButton").addEventListener("click", function() {
    // Define the series of numbers
    var series = [11, 12, 14, 15, 16, 18, 19, 20];

    // Find the missing numbers
    var missingNumbers = findMissingNumbers(series);

    // Display the result
    document.getElementById("result").textContent = "Missing numbers: " + missingNumbers.join(", ");
});

function findMissingNumbers(series) {
    // Find the minimum and maximum numbers in the series
    var min = Math.min(...series);
    var max = Math.max(...series);

    // Generate a new array containing all numbers from min to max
    var allNumbers = [];
    for (var i = min; i <= max; i++) {
        allNumbers.push(i);
    }

    // Compare the original series with the generated array to find missing numbers
    var missingNumbers = [];
    for (var j = min; j <= max; j++) {
        if (!series.includes(j)) {
            missingNumbers.push(j);
        }
    }

    return missingNumbers;
}
