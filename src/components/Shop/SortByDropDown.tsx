'use client'
import React, { useState } from 'react';

type SortOption = 'priceLowHigh' | 'priceHighLow' | 'nameAsc' | 'nameDesc';

const SortDropdown: React.FC = () => {
    const [sortOption, setSortOption] = useState<SortOption>();

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value as SortOption;
        setSortOption(selectedOption);
        // Implement sorting logic based on selectedOption here
        console.log(`Selected Sort Option: ${selectedOption}`);
    };

    return (
        <div>
            <label htmlFor="sortDropdown">Sort By: </label>
            <select id="sortDropdown" value={sortOption} onChange={handleSortChange} className=' mx-2 rounded-md border-[1px] border-[#dcdcdc] p-2 text-gray-500'>
                <option value="Newest" defaultValue="Newest" >Newest</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="nameAsc">Name: A to Z</option>
                <option value="nameDesc">Name: Z to A</option>
            </select>
        </div>
    );
};

export default SortDropdown;
