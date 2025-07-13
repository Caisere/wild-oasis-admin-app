import React from 'react'

//components
import Spinner from '../../ui/Spinner'
import CabinRow from './CabinRow';
import { useCabins } from './useCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';


function CabinTable (){
    // error
    const {cabins, isLoading, error} = useCabins()
    const [searchParams] = useSearchParams()

    if (isLoading) return  <Spinner />    
    if (error) return <>Error Loading data: {error.message}</>

    const filtered = searchParams.get('discount') || 'all'
    // console.log(filtered)


    let filteredCabins;

    if (filtered === 'all') filteredCabins = cabins
    if (filtered === 'no-discount') filteredCabins = cabins.filter(cabin => cabin.discount === 0)
    if (filtered === 'with-discount') filteredCabins = cabins.filter(cabin => cabin.discount > 0)

    // console.log(filteredCabins)
    
    // Sort 2
    const sortBy = searchParams.get('sortBy') || 'name-asc'
    const [filter, direction] = sortBy.split('-')
    const modifier = direction === 'asc' ? 1 : -1;
    const sortedCabin = filteredCabins.sort((a,b) => (a[filter] - b[filter]) * modifier)
    // console.log(sortedCabin)

    return (
        <Menus>
            <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
                <Table.Header>
                    <div></div>
                    <div>Cabin</div>
                    <div>Capacity</div>
                    <div>Price</div>
                    <div>Discount</div>
                    <div></div>
                </Table.Header>


                <Table.Body data={sortedCabin} render={cabin => (
                    <CabinRow cabin={cabin} key={cabin.id}/>)}
                    />
            </Table>
        </Menus>
    )
}

export default CabinTable
