import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEditCabin } from "../../services/apiCabins"
import toast from "react-hot-toast"

export function useCreateCabin() {
    // queryClient for validation of queries
    const queryClient = useQueryClient()

    // creating functionality
    const {isPending: isCreating, mutate: createCabin} = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            toast.success('New Cabin successfully created')
            queryClient.invalidateQueries({
                queryKey: ['cabins']
            })
            // reset()
        },
        onError: (err) => {
            toast.error(err.message)
        }
    })

    return {isCreating, createCabin}
}