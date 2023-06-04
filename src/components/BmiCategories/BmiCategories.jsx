function BmiCategories() {
    const categories = [
        { label: 'Underweight', range: '< 18.5' },
        { label: 'Normal weight', range: '18.5 - 24.9' },
        { label: 'Overweight', range: '25 - 29.9' },
        { label: 'Obese', range: '>= 30' },
    ];

    return (
        <section>
            <h2 className='mb-2 text-lg font-bold'>BMI Categories</h2>
            <ul className='ml-5'>
                {categories.map((category, index) => (
                    <li key={index} className='my-1'>
                        <span className='font-medium'>{category.label}:</span> {category.range}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default BmiCategories;
