import { useQuery } from "@tanstack/react-query";
// import { getCabins } from "../../services/apiCabins";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {

    const {bookingId} = useParams()
    
    const {data: booking, isPending: isLoading, error} = useQuery({
        queryKey: ['booking', bookingId],
        queryFn: () => getBooking(bookingId),
        retry: false
    })
    // console.log(booking, bookingId)
    return {booking, isLoading, error}
}