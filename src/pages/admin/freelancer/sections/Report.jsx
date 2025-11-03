import React from 'react';
import Henrey from '../components/Henrey';
import ReportNStatistic from '../components/ReportNStatistic';
import DateFilterButton from '../components/DateFilterButton';
import CoursesTableV2 from './CoursesTableV2';

const Report = () => {
    return (
        <div className=''>
            <Henrey/>
            
            <ReportNStatistic/>
            <CoursesTableV2/>
        </div>
    );
};

export default Report;