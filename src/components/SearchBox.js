import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='tr f3 w-50 pa4 mr2'>
            <input 
                className='pa2 ba b--yellow bg-light-yellow'
                type='search' 
                placeholder='Search users by name' 
                onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;