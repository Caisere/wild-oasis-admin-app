import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
    const [searchParam] = useSearchParams()

    // Filter bookings
    const filterBookings = searchParam.get('status')
    // console.log(filterBookings)
    
    const filter = !filterBookings || filterBookings === 'all' ? null : {field: 'status', value: filterBookings}

    const sortedBookings = searchParam.get('sortBy') || "startDate-desc";

    const [sort, direction] = sortedBookings.split('-');

    const sortBy = {sort, direction}

    const {data: bookings, isPending: isLoading, error} = useQuery({
        queryKey: ['bookings', filter, sortBy],
        queryFn: () => getBookings({filter, sortBy})
    })
    // console.log(bookings)
    return {bookings, isLoading, error}
}