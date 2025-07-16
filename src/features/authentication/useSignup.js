import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
    const {mutate: signup, isPending: isSigningUp } = useMutation({
        mutationFn: signupApi,
        onSuccess: (data) => {
            // console.log(data)
            toast.success(`${data.user.user_metadata.fullName} account successfully created! Please verify the new account from the user's address`)
        }
    })

    return {signup, isSigningUp}
}