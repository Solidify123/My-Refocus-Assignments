function calculateBMI(weight, height) {
    // Convert height from cm to m
    height = height / 100;
    
    // Calculate BMI
    const bmi = weight / (height * height);
    
    return bmi;
  }
  
  // Example usage:
  const weight = 70; // kg
  const height = 170; // cm
  const bmi = calculateBMI(weight, height);
  
  console.log("Your BMI is: " + bmi.toFixed(2));
  