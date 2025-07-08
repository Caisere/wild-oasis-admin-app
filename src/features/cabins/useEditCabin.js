import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin () {
    // queryClient for validation of queries
    const queryClient = useQueryClient()
    
    //editing functionality
    const {isPending: isEditing, mutate: editCabin} = useMutation({
        mutationFn: ({newCabinData, id}) => createEditCabin(newCabinData, id),
        onSuccess: () => {
            toast.success('Cabin successfully edited')
            queryClient.invalidateQueries({
                queryKey: ['cabins']
            })
            // reset()
        },
        onError: (err) => {
            toast.error(err.message)
        }
    })

    return {isEditing, editCabin}
}