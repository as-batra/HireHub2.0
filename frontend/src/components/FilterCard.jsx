
import React from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterLocation, setFilterSalary, setSearchedQuery, setCurrentPage } from '@/redux/jobSlice';
import { Button } from './ui/button';

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        filterType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
];

const FilterCard = () => {
    const dispatch = useDispatch();
    const { filterLocation, filterSalary, searchedQuery } = useSelector(store => store.job);

    const handleLocationChange = (val) => {
        dispatch(setFilterLocation(val));
        dispatch(setCurrentPage(1));
    };

    const handleIndustryChange = (val) => {
        dispatch(setSearchedQuery(val));
        dispatch(setCurrentPage(1));
    };

    const handleSalaryChange = (val) => {
        dispatch(setFilterSalary(val));
        dispatch(setCurrentPage(1));
    };

    const handleClearFilters = () => {
        dispatch(setFilterLocation(""));
        dispatch(setFilterSalary(""));
        dispatch(setSearchedQuery(""));
        dispatch(setCurrentPage(1));
    };

    return (
        <div className='w-full bg-gray-100 p-5 rounded-lg shadow-lg'>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-xl text-blue-600'>Filter Jobs</h1>
                <Button onClick={handleClearFilters} variant="outline" size="sm" className="text-xs text-red-500 hover:text-red-700 hover:bg-red-50">
                    Clear All
                </Button>
            </div>
            <hr className='mt-3 border-blue-400' />
            
            <div className='mt-4'>
                <h2 className='font-semibold text-lg text-gray-800'>Location</h2>
                <RadioGroup value={filterLocation} onValueChange={handleLocationChange}>
                    {filterData[0].array.map((item, idx) => {
                        const itemId = `loc-${idx}`;
                        return (
                            <div key={itemId} className='flex items-center space-x-2 my-2'>
                                <RadioGroupItem value={item} id={itemId} className='text-blue-600' />
                                <Label htmlFor={itemId} className='text-gray-700'>{item}</Label>
                            </div>
                        );
                    })}
                </RadioGroup>
            </div>

            <div className='mt-4'>
                <h2 className='font-semibold text-lg text-gray-800'>Industry</h2>
                <RadioGroup value={searchedQuery} onValueChange={handleIndustryChange}>
                    {filterData[1].array.map((item, idx) => {
                        const itemId = `ind-${idx}`;
                        return (
                            <div key={itemId} className='flex items-center space-x-2 my-2'>
                                <RadioGroupItem value={item} id={itemId} className='text-blue-600' />
                                <Label htmlFor={itemId} className='text-gray-700'>{item}</Label>
                            </div>
                        );
                    })}
                </RadioGroup>
            </div>

            <div className='mt-4'>
                <h2 className='font-semibold text-lg text-gray-800'>Salary</h2>
                <RadioGroup value={filterSalary} onValueChange={handleSalaryChange}>
                    {filterData[2].array.map((item, idx) => {
                        const itemId = `sal-${idx}`;
                        return (
                            <div key={itemId} className='flex items-center space-x-2 my-2'>
                                <RadioGroupItem value={item} id={itemId} className='text-blue-600' />
                                <Label htmlFor={itemId} className='text-gray-700'>{item}</Label>
                            </div>
                        );
                    })}
                </RadioGroup>
            </div>
        </div>
    );
};

export default FilterCard;
