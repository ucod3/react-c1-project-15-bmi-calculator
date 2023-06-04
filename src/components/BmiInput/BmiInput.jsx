function BmiInput({ label, min, max, value, onChange }) {
    return (
        <section className='space-y-2'>
            <label className='font-medium'>{label}</label>
            <input
                type='range'
                min={min}
                max={max}
                value={value}
                onChange={e => onChange(Number(e.target.value))}
                className='w-full'
            />
            <p className='text-sm'>
                Selected {label}: <span className='font-medium'>{value}</span>
            </p>
        </section>
    );
}

export default BmiInput;
