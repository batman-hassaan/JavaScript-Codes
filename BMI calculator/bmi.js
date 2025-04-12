function calculateBMI() {
    // Get input values
    const weight = parseFloat(document.getElementById("weight").value);
    const heightFeet = parseFloat(document.getElementById("height-feet").value) || 0;
    const heightInches = parseFloat(document.getElementById("height-inch").value) || 0;

    // Convert height to meters
    const totalHeightInInches = (heightFeet * 12) + heightInches;
    const totalHeightInMeters = totalHeightInInches * 0.0254;

    // Validate inputs
    if (isNaN(weight) || weight <= 0) {
        document.getElementById("result").innerText = "Please enter a valid weight (must be a positive number).";
        return;
    }

    if (isNaN(totalHeightInMeters) || totalHeightInMeters <= 0) {
        document.getElementById("result").innerText = "Please enter a valid height (must be a positive number).";
        return;
    }

    // Calculate BMI
    const bmi = weight / (totalHeightInMeters ** 2);

    // Determine category
    let category = "";
    if (bmi < 16) {
        category = "Severe Thinness";
    } else if (bmi >= 16 && bmi < 17) {
        category = "Moderate Thinness";
    } else if (bmi >= 17 && bmi < 18.5) {
        category = "Mild Thinness";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else if (bmi >= 30 && bmi < 35) {
        category = "Obese Class I";
    } else if (bmi >= 35 && bmi < 40) {
        category = "Obese Class II";
    } else {
        category = "Obese Class III";
    }

    // Display results
    document.getElementById("result").innerHTML = `
        <p>Your BMI is <span class="text-blue-600 font-bold">${bmi.toFixed(2)}</span></p>
        <p>Category: <span class="font-bold ${getCategoryColor(category)}">${category}</span></p>
    `;
}

// Helper function for category colors
function getCategoryColor(category) {
    switch (category) {
        case "Severe Thinness": return "text-yellow-800";
        case "Moderate Thinness": return "text-yellow-600";
        case "Mild Thinness": return "text-yellow-400";
        case "Normal": return "text-green-600";
        case "Overweight": return "text-orange-500";
        case "Obese Class I": return "text-red-500";
        case "Obese Class II": return "text-red-600";
        case "Obese Class III": return "text-red-800";
        default: return "text-gray-600";
    }
}
