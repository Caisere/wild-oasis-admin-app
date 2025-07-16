import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Checkbox from '../../ui/Checkbox'
import Spinner from "../../ui/Spinner";         

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";


const Box = styled.div`
    /* Box */
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    padding: 2.4rem 4rem;

    background-color: ${(props) =>
        props.isPaid ? "var(--color-brand-100)" : "var(--color-red-100)"};
`;

function CheckinBooking() {
    // state to monitor the isPaid checkbox
    const [confirmedPaid, setConfirmedPaid] = useState(false)
    const [addBreakfast, setAddBreakfast] = useState(false)

    // navigating back to the last or previous page
    const moveBack = useMoveBack();
    
    // checkIn (mutate function) and isChckingIn (isPending/Loading) state from the useCheckin hook
    const {checkIn, isCheckingIn} = useCheckin()

    const {settings, isLoading: isLoadingSettings} = useSettings()

    
    // booking and loading state from useBooking hook
    const {booking, isLoading} = useBooking()
    // console.log(booking)
    
    // effect to set confirm the payment of bookings 
    useEffect(() => {
        setConfirmedPaid(booking?.isPaid ?? false)
    }, [booking?.isPaid])
    
    if (isLoading || isLoadingSettings) return <Spinner />

    
    
    const {
        id: bookingId,
        guest,
        totalPrice,
        numGuests,
        hasBreakfast,
        numNights,
    } = booking;


    const breakfastPrice = settings.breakfastPrice  * numGuests * numNights
    
    function handleCheckin() {
        if (!confirmedPaid) return

        if (addBreakfast) {
            checkIn({bookingId, breakfast: {
                hasBreakfast: true,
                extrasPrice: breakfastPrice,
                totalPrice: totalPrice + breakfastPrice
            }})
        } else {
            checkIn({bookingId, breakfast: {}})
        }
    }

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Check in booking #{bookingId}</Heading>
                <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            </Row>

            <BookingDataBox booking={booking} />

            {!hasBreakfast &&   
                <Box>
                    <Checkbox 
                        checked={addBreakfast} 
                        onChange={() => {
                            setAddBreakfast(add => !add)
                            setConfirmedPaid(false)
                        }}
                        id='breakfast'
                    >
                        Want to add Breakfast for {formatCurrency(breakfastPrice)}
                    </Checkbox>
                </Box>
            }

            <Box isPaid={confirmedPaid}>
                <Checkbox 
                    checked={confirmedPaid} 
                    onChange={() => setConfirmedPaid(paid => !paid)} 
                    id='confirm' 
                    disabled={confirmedPaid || isCheckingIn}
                >
                    I confirm that {guest.fullName} has paid the total amount of {!addBreakfast ? formatCurrency(totalPrice) : `${formatCurrency(totalPrice + breakfastPrice)} (${formatCurrency(totalPrice)} + ${formatCurrency(breakfastPrice)})`} 
                </Checkbox>
            </Box>

            <ButtonGroup>
                <Button 
                    onClick={handleCheckin} 
                    disabled={!confirmedPaid || isCheckingIn}
                >
                    Check in booking #{bookingId}
                </Button>
                <Button 
                    variation="secondary" 
                    onClick={moveBack}
                >
                    Back
                </Button>
            </ButtonGroup>
        </>
    );
}

export default CheckinBooking;
