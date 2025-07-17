import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createEditCabin } from "../../services/apiCabins";
import { updateUserData } from "../../services/apiAuth";

export function useUpdateUser () {
    // queryClient for validation of queries
    const queryClient = useQueryClient()
    
    //editing functionality
    const {isPending: isUpdatingUser, mutate: updateUser} = useMutation({
        mutationFn:  updateUserData,
        onSuccess: () => {
            toast.success('User account successfully updated')
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
            // reset()
        },
        onError: (err) => {
            toast.error(err.message)
        }
    })

    return {isUpdatingUser, updateUser}
}