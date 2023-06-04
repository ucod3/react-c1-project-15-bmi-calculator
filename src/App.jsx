import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import BmiDisplay from './components/BmiDisplay/BmiDisplay';
import { getBmiCategory } from './components/BmiCategory/BmiCategory';
import BmiCategories from './components/BmiCategories/BmiCategories';
import Disclaimer from './components/Disclaimer/Disclaimer';

function App() {
    const [weight, setWeight] = useState(132); // starting value in lbs
    const [height, setHeight] = useState(160); // starting value in cm
    const [bmi, setBmi] = useState('');
    const [bmiCategory, setBmiCategory] = useState('');

    useEffect(() => {
        if (weight && height) {
            const weightInKg = weight * 0.453592; // convert lbs to kg
            const heightInMeters = height / 100; // convert cm to m
            const calculatedBmi = weightInKg / heightInMeters ** 2;
            setBmi(calculatedBmi.toFixed(2)); // rounding off to 2 decimal places
            setBmiCategory(getBmiCategory(calculatedBmi)); // set the BMI category
        }
    }, [weight, height]);

    return (
        <section className='max-w-lg p-4 mx-auto space-y-6 bg-white shadow-md rounded-xl'>
            <Header />
            <BmiDisplay
                weight={weight}
                setWeight={setWeight}
                height={height}
                setHeight={setHeight}
                bmi={bmi}
                bmiCategory={bmiCategory}
            />

            <article>
                <BmiCategories className='mt-4' />
            </article>
            <aside>
                <Disclaimer className='text-sm' />
            </aside>
        </section>
    );
}

export default App;
