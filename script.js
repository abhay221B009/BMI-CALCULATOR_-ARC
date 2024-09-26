// Toggle between Metric and Imperial inputs for height
function toggleUnits() {
    const unit = document.getElementById("unit").value;
    const metricInputs = document.getElementById("metricInputs");
    const imperialInputs = document.getElementById("imperialInputs");

    if (unit === "metric") {
        metricInputs.style.display = "block";
        imperialInputs.style.display = "none";
    } else {
        metricInputs.style.display = "none";
        imperialInputs.style.display = "block";
    }
}

function calculateBMI() {
    const unit = document.getElementById("unit").value;
    let height, weight, bmi;

    // Get the weight in kg
    weight = parseFloat(document.getElementById("weight").value);
    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight in kilograms!");
        return;
    }

    if (unit === "metric") {
        // Metric height in cm
        height = parseFloat(document.getElementById("height").value);
        if (isNaN(height) || height <= 0) {
            alert("Please enter a valid height in centimeters!");
            return;
        }
        // Convert height from cm to meters for the BMI formula
        bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    } else {
        // Imperial height in feet-inches, but weight still in kg
        const feet = parseFloat(document.getElementById("feet").value);
        const inches = parseFloat(document.getElementById("inches").value);
        if (isNaN(feet) || isNaN(inches) || feet < 0 || inches < 0) {
            alert("Please enter a valid height in feet and inches!");
            return;
        }
        // Convert height from feet and inches to meters
        height = (feet * 12) + inches; // Total height in inches
        height = height * 0.0254; // Convert inches to meters
        bmi = (weight / (height ** 2)).toFixed(2); // BMI formula using kg and meters
    }

    // Display the BMI result
    document.getElementById("bmiResult").textContent = `Your BMI is: ${bmi}`;

    // Determine the BMI category
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display the BMI category
    document.getElementById("bmiCategory").textContent = `You are in the category: ${category}`;
}
