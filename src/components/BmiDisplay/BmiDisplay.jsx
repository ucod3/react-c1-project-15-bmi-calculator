import BmiInput from '../BmiInput/BmiInput';
import BmiResult from '../BmiResult/BmiResult';

function BmiDisplay({ weight, setWeight, height, setHeight, bmi, bmiCategory }) {
    return (
        <form>
            <BmiInput className='w-full' label='Weight (lbs)' min='66' max='330' value={weight} onChange={setWeight} />
            <BmiInput className='w-full' label='Height (cm)' min='140' max='210' value={height} onChange={setHeight} />
            <BmiResult className='w-full text-center' value={bmi} />
            <p className='text-lg text-center'>
                Your BMI Category is: <span className='font-bold'>{bmiCategory}</span>
            </p>
        </form>
    );
}

export default BmiDisplay;
