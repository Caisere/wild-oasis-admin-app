import { useUpdateSetting } from './useUpdateSetting';
import { useSettings } from './useSettings';

// ui components
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';

function UpdateSettingsForm() {
    const {isUpdating, updateSetting} = useUpdateSetting()
    const {settings: {minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice} = {}, isLoading} = useSettings()
    
    
    function handleSettingUpdate(e, updatingField) {
        const value = e.target.value;
        // const check = {[updatingField]: value}
        // console.log(check)
        updateSetting({
            [updatingField]: value
        })
        
    }
    
    if(isLoading) return  <Spinner /> 
    
    return (
        <Form>
            <FormRow label='Minimum nights/booking'>
                <Input 
                    type='number' 
                    id='min-nights'
                    defaultValue={minBookingLength}
                    onBlur={(e) => handleSettingUpdate(e, 'minBookingLength')}
                    disabled={isUpdating} 
                />
            </FormRow>
            <FormRow label='Maximum nights/booking'>
                <Input 
                    type='number' 
                    id='max-nights'
                    defaultValue={maxBookingLength}
                    onBlur={(e) => handleSettingUpdate(e, 'maxBookingLength')}
                    disabled={isUpdating} 

                />
            </FormRow>
            <FormRow label='Maximum guests/booking'>
                <Input 
                    type='number' 
                    id='max-guests'
                    defaultValue={maxGuestsPerBooking}
                    onBlur={(e) => handleSettingUpdate(e, 'maxGuestsPerBooking')}
                    disabled={isUpdating} 
                />
            </FormRow>
            <FormRow label='Breakfast price'>
                <Input 
                    type='number' 
                    id='breakfast-price'
                    defaultValue={breakfastPrice}
                    onBlur={(e) => handleSettingUpdate(e, 'breakfastPrice')}
                    disabled={isUpdating}  
                />
            </FormRow>
        </Form>
    );
}

export default UpdateSettingsForm;
