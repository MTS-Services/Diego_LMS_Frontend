import React, { useState, useEffect } from 'react';
import Henrey from '../components/Henrey';
import ReportNStatistic from '../components/ReportNStatistic';
import DateFilterButton from '../components/DateFilterButton';
import CoursesTableV2 from './CoursesTableV2';

const Report = () => {
    const [coursesData, setCoursesData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFreelancerData();
    }, []);

    const fetchFreelancerData = async () => {
        try {
            setLoading(true);
            const response = await fetch('/fakeData/freelancer.json');
            const data = await response.json();
            setCoursesData(data.courses);
        } catch (error) {
            console.error('Error fetching freelancer data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=''>
            <Henrey/>
            
            <ReportNStatistic/>
            <CoursesTableV2 courses={coursesData} loading={loading} />
        </div>
    );
};

export default Report;