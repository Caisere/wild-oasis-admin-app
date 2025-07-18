import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity () {
    const {data: activities, isPending: isLoadingActivities} = useQuery({
        queryKey: ['todal-activity'],
        queryFn: getStaysTodayActivity
    })

    return {activities, isLoadingActivities}
}