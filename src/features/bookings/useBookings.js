import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
    const [searchParams] = useSearchParams()

    // Filter bookings
    const filterBookings = searchParams.get('status')
    // console.log(filterBookings)
    
    const filter = !filterBookings || filterBookings === 'all' ? null : {field: 'status', value: filterBookings}

    const sortedBookings = searchParams.get('sortBy') || "startDate-desc";

    const [sort, direction] = sortedBookings.split('-');

    const sortBy = {sort, direction}


    const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

    const {data: {data:bookings, count} = {}, isPending: isLoading, error} = useQuery({
        queryKey: ['bookings', filter, sortBy, page],
        queryFn: () => getBookings({filter, sortBy, page})
    })
    // console.log(bookings)
    return {bookings, count, isLoading, error}
}