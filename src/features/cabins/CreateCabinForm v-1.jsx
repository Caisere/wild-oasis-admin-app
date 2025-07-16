import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createCabin } from "../../services/apiCabins";

//components
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";





function CreateCabinForm() {
    const queryClient = useQueryClient()

    const {register, handleSubmit, reset, formState, getValues} = useForm()

    const {errors} = formState  

    const {isLoading: isCreating, mutate} = useMutation({
        mutationFn: createCabin,
        onSuccess: () => {
            toast.success('New Cabin successfully created')
            queryClient.invalidateQueries({
                queryKey: ['cabins']
            })
            reset()
        },
        onError: (err) => {
            toast.error(err.message)
        }
    })



    function CreateCabin(data) {
        // const image = {...data, image: data?.image[0].name}
        mutate({...data, image: data?.image[0]})
    }

    function onError (err){
        console.log(err)
    }   

    return (
        <Form onSubmit={handleSubmit(CreateCabin, onError)}>

            <FormRow label='Cabin name' error={errors?.name?.message}>
                <Input 
                    type="text"
                    disabled={isCreating} 
                    id="name" 
                    {...register('name', 
                        {required: 'This field is required'})
                    } 
                />
            </FormRow>
            
            <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
                <Input 
                    type="number"
                    disabled={isCreating}  
                    id="maxCapacity" 
                    {...register('maxCapacity', {
                            required: 'This field is required', 
                            min: {
                                value: 1, 
                                message: 'Capacity should be at least one'
                            }
                        })
                    } 
                />
            </FormRow>

            <FormRow label='Regular Price' error={errors?.regularPrice?.message}>
                <Input 
                    type="number"
                    disabled={isCreating}  
                    id="regularPrice" 
                    {...register('regularPrice', {
                            required: 'This field is required', 
                            min: {
                                value: 1, 
                                message: 'Capacity should be at least one'
                            }
                        })
                    } 
                />
            </FormRow>

            <FormRow label='Discount' error={errors?.discount?.message}>
                <Input
                    type="number"
                    disabled={isCreating}  
                    id="discount" 
                    defaultValue={0} 
                    {...register('discount', {
                            required: 'This field is required', 
                            validate: (value) => value <= getValues().regularPrice || 'discount should be less than the regular price'
                        })
                    } 
                />
            </FormRow>

            <FormRow label='Description for Website' error={errors?.description?.message}>
                <Textarea 
                    type="number"
                    disabled={isCreating}  
                    id="description" 
                    defaultValue="" 
                    {...register('description', {
                            required: 'This field is required'
                        })
                    } 
                />
            </FormRow>

            <FormRow label='Cabin Phone'>
                <FileInput 
                    id="image" 
                    accept="image/*"
                    {...register('image', {
                            required: 'This field is required'
                        })
                    }
                />
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button variation="secondary" type="reset">
                    Cancel
                </Button>
                <Button disabled={isCreating}>Add cabin</Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;
