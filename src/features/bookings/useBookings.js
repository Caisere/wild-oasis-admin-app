import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constant";

export function useBookings() {
    const queryClient = useQueryClient()
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

    const pageCount = count / PAGE_SIZE // 24 / 6 = 4

    // prefetch for next page
    if (page < pageCount) {
        queryClient.prefetchQuery({
            queryKey: ['bookings', filter, sortBy, page + 1],
            queryFn: () => getBookings({filter, sortBy, page: page + 1})
        })
    }


    // prefetch for previous page
    if (page > 1) {
        queryClient.prefetchQuery({
            queryKey: ['bookings', filter, sortBy, page - 1],
            queryFn: () => getBookings({filter, sortBy, page: page - 1})
        })
    }
    

    // console.log(bookings)
    return {bookings, count, isLoading, error}
}


