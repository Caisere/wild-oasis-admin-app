import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
    const [searchParam] = useSearchParams()

    // Filter bookings
    const filterBookings = searchParam.get('status')
    // console.log(filterBookings)
    
    const filter = !filterBookings || filterBookings === 'all' ? null : {field: 'status', value: filterBookings}
    

    const {data: bookings, isPending: isLoading, error} = useQuery({
        queryKey: ['bookings', filter],
        queryFn: () => getBookings({filter})
    })
    // console.log(bookings)
    return {bookings, isLoading, error}
}