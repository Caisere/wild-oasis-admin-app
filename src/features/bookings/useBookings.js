import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiCabins";

export function useBookings() {
    const {data: bookings, isPending: isLoading, error} = useQuery({
        queryKey: ['bookings'],
        queryFn: getBookings
    })
    // console.log(bookings)
    return {bookings, isLoading, error}
}