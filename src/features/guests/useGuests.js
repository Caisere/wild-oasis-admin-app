import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGuests } from "../../services/apiGuests";
import { useSearchParams } from "react-router-dom";
import { GUESTS_SIZE } from "../../utils/constant";


export function useGuests() {
    const queryClient = useQueryClient()
    const [searchParams] = useSearchParams()

    const page = !searchParams.get('guests') ? 1 : Number(searchParams.get('guests'))

    
    const {data: {data: guests, count} = {}, isPending: isLoadingGuests} = useQuery({
        queryKey: ['guests', page],
        queryFn: () => getGuests(page)
    })

    
    const guestPageCount = count / GUESTS_SIZE

    
    if (page < guestPageCount ) {
        queryClient.prefetchQuery({
            queryKey: ['guests', page + 1],
            queryFn: () => getGuests(page + 1)
        })
    }

    if(page > 1) {
        queryClient.prefetchQuery({
            queryKey: ['guests', page - 1],
            queryFn: () => getGuests(page - 1)
        })
    }

    return {guests, count, isLoadingGuests}
}