// BmiResult component
function BmiResult({ value }) {
    return (
        <p className="my-5 text-lg font-medium">
            Your BMI is: <span className="font-bold">{value}</span>
        </p>
    );
}

export default BmiResult;
