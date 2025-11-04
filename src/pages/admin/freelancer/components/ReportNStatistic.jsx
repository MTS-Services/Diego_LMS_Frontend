import mockup from '../../../../../public/image/freelancerBg/dashboard.png'
import DateFilterButton from './DateFilterButton';

const ReportNStatistic = () => {
    return (
        <div className="py-8 lg:py-10">
            <h1 className="justify-start text-zinc-900 text-4xl font-semibold font-['Poppins'] leading-[54px] mb-2 lg:mb-4">Report & Statistiche</h1>

            <DateFilterButton/>
            <div className='py-10'>
                <img className='w-full h-auto' src={mockup} alt="Report & Statistiche" />
            </div>
        </div>
    );
};

export default ReportNStatistic;