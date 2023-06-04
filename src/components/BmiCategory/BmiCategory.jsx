// function to determine the BMI category
export function getBmiCategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    }
    if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    }
    if (bmi >= 24.9 && bmi < 29.9) {
        return 'Overweight';
    }
    return 'Obese';
}
