import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom'

const SortBy = ({options}) => {
    const [searchParams, setSearchParams] = useSearchParams(    )

    const sortBy = searchParams.get('sortBy') || ''

    function handleChange (e) {
        const value = e.target.value
        searchParams.set('sortBy', value)
        setSearchParams(searchParams)
        // console.log(value)
    }
    return (
        <div>
            <Select options={options} value={sortBy} onChange={handleChange} type='white'  />
        </div>
    )
}

export default SortBy