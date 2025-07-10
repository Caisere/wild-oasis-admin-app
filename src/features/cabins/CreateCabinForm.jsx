import { useForm } from "react-hook-form";
import { useEditCabin } from "./useEditCabin";
import { useCreateCabin } from "./useCreateCabin";

//components
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";




// setShowEditForm
function CreateCabinForm({cabinToEdit = {}, onCloseModal}) {
    // data from cabinToEdit
    const {id: editId, ...editValues} = cabinToEdit;

    //checking is action is edition through the id
    const isEditSession = Boolean(editId)

    
    // useForm for form submission handling with defualt values for editing action
    const {register, handleSubmit, reset, formState, getValues} = useForm({
        defaultValues: isEditSession ? editValues : {}
    })
    
    // errors from the form submission
    const {errors} = formState  
    
    // creating functionality
    const {isCreating, createCabin} = useCreateCabin()

    //editing functionality
    const {isEditing, editCabin} = useEditCabin()

    // checking if cabin is being created or editing to disabled some inputs 
    const isWorking = isCreating || isEditing;


    // function to create or edit cabin(s)
    function CreateEditCabin(data) {
        // console.log(data)
        const image = typeof data.image === 'string' ? data.image : data.image[0]
        // console.log(image)

        //edit cabin
        if(isEditSession) {
            editCabin({newCabinData: {...data, image}, id: editId}, {
                onSuccess: () => reset()
            });
            // setShowEditForm(false)
        }
        else createCabin({...data, image: image}, {
            onSuccess: () => {
                reset()
                onCloseModal?.()
                // handleCloseModal()
            }
        }) // create cabin
    }

    function onError (err){
        console.log(err)
    }   

    // function handleCloseModal () {
    //     if (onCloseModal)
    //     onCloseModal()
    // }

    return (
        <Form onSubmit={handleSubmit(CreateEditCabin, onError)} type={onCloseModal ? 'modal' : 'regular'}>

            <FormRow label='Cabin name' error={errors?.name?.message}>
                <Input 
                    type="text"
                    disabled={isWorking} 
                    id="name" 
                    {...register('name', 
                        {required: 'This field is required'})
                    } 
                />
            </FormRow>
            
            <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
                <Input 
                    type="number"
                    disabled={isWorking}  
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
                    disabled={isWorking}  
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
                    disabled={isWorking}  
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
                    disabled={isWorking}  
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
                            required: isEditSession ? false : 'This field is required'
                        })
                    }
                />
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button v
                    ariation="secondary" 
                    type="reset"
                    onClick={onCloseModal?.()}
                >
                    Cancel
                </Button>
                <Button disabled={isWorking}>{isEditSession ? 'Edit Cabin' : "Create new cabin"}</Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;
