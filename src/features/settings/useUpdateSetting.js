import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting () {
    // queryClient for validation of queries
    const queryClient = useQueryClient()
    
    //setting update request functionality
    const {isPending: isUpdating, mutate: updateSetting} = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
            toast.success('Setting successfully updated')
            queryClient.invalidateQueries({
                queryKey: ['settings']
            })
        },
        onError: (err) => {
            toast.error(err.message)
        }
    })

    return {isUpdating, updateSetting}
}